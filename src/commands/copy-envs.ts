import { Command, Flags } from '@oclif/core'
import d from '../utils/debug'
import { getAllEnvsFromRootDir, createDir, copyFile, zipDirectory } from '../services/files'

const debug = d.extend('commands:env')

export default class CopyEnvs extends Command {
  static description = `
  Are you moving to a new machine and wants to get all the env files you might have around?
  This script is for you! Or at least for me for all the times I had to go through all my projects and copy the .env files to the new machine.
  This will copy all the .env files to a new directory whilst recreating the folders structure.`

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {
    path: Flags.string({ char: 'p', description: 'Path to the directory where your .env files are located', required: true }),
    target: Flags.string({ char: 't', description: 'Custom path to the directory where your .env files will be copied to' }),
    compress: Flags.boolean({ char: 'c', description: 'Compress the envs directory into a zip file' }),
  }

  static args = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(CopyEnvs)
    debug('flags %o', flags)

    const targetedDir = flags.target || './envs'

    this.log('Reading .env files from: ' + flags.path);

    const envs = await getAllEnvsFromRootDir(flags.path)

    this.log('Found ' + envs.length + ' .env files! Starting to copy them to the new directory...')

    await createDir(targetedDir)

    for (const env of envs) {
      await createDir(`${targetedDir}${env.relativePath.replace(env.fileName, '')}`)

      await copyFile({
        filePath: env.fullPath,
        newFilePath: `${targetedDir}${env.relativePath}`,
      })
    }

    this.log('Done! All .env files were copied to the new directory!')

    if (flags.compress) {
      this.log('Compressing envs directory into a zip file...')
      await zipDirectory(targetedDir, `${targetedDir}.zip`)
    }
  }
}
