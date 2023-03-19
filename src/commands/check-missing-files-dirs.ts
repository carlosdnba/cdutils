import { Command, Flags } from '@oclif/core'

export default class CheckMissingFilesDirs extends Command {
  static description = `
  Will compare the files and directories of the source and target directories and will output the missing files and directories.`

  static examples = [
    `<%= config.bin %> <%= command.id %>
`,
  ]

  static flags = {
    origin: Flags.string({ char: 'o', description: 'Path to the base dir', required: true }),
    target: Flags.string({ char: 't', description: 'Path to the target dir', required: true }),
  }

  static args = {}

  async run(): Promise<void> {
    this.log('Starting to compare both dirs...')
  }
}
