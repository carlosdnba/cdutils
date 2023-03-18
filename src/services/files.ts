import * as fs from 'fs-extra';
import * as archiver from 'archiver';
import d from '../utils/debug'

const debug = d.extend('services:files')

export async function getDirsFromPath(path: string): Promise<string[]> {
  const files = await fs.readdir(path, { withFileTypes: true })

  const paths = files
    .filter(f => f.isDirectory())
    .map(d => `${path}/${d.name}`)

  return paths
}

const ignoredDirs = new Set(['node_modules', '.git'])

export async function deepGetDirsFromPath(path: string): Promise<string[]> {
  const dirs = await getDirsFromPath(path)
  const allDirs = [...dirs]

  for (const dir of dirs) {
    const dirName = dir.split('/').pop() || ''

    if (dir.includes(process.cwd())) continue // Ignoring current dir in case we are running the script from inside the root dir
    if (ignoredDirs.has(dirName)) continue // Ignoring another dirs

    const subDirs = await deepGetDirsFromPath(dir)
    allDirs.push(...subDirs)
  }

  return allDirs
}

export async function getAllEnvsFromRootDir(root: string): Promise<{
  fullPath: string
  relativePath: string
  fileName: string
}[]> {
  const envs = []

  const dirs = await deepGetDirsFromPath(root)

  for (const dir of dirs) {
    const files = await fs.readdir(dir)
    const envFile = files.find(f => f.includes('.env'))

    if (envFile) {
      envs.push({
        fullPath: `${dir}/${envFile}`,
        relativePath: `${dir.replace(root, '')}/${envFile}`,
        fileName: envFile,
      })
    }
  }

  debug('envs %o', envs)
  return envs
}

export async function createDir(path: string): Promise<void> {
  await fs.mkdir(path, { recursive: true })
}

export async function copyFile({ filePath, newFilePath }: { filePath: string, newFilePath: string }): Promise<{ success: boolean }> {
  try {
    await fs.copyFile(filePath, newFilePath)
    return { success: true }
  } catch (error) {
    debug('Error when copying file %o', error)
    return { success: false }
  }
}

export async function zipDirectory(sourceDir: string, outPath: string): Promise<void> {
  const archive = archiver.create('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise<void>((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', (err: Error) => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}
