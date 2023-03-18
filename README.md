oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cdutils
$ cdu COMMAND
running command...
$ cdu (--version)
cdutils/0.0.0 darwin-arm64 node-v16.19.1
$ cdu --help [COMMAND]
USAGE
  $ cdu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cdu hello PERSON`](#cdu-hello-person)
* [`cdu hello world`](#cdu-hello-world)
* [`cdu help [COMMANDS]`](#cdu-help-commands)
* [`cdu plugins`](#cdu-plugins)
* [`cdu plugins:install PLUGIN...`](#cdu-pluginsinstall-plugin)
* [`cdu plugins:inspect PLUGIN...`](#cdu-pluginsinspect-plugin)
* [`cdu plugins:install PLUGIN...`](#cdu-pluginsinstall-plugin-1)
* [`cdu plugins:link PLUGIN`](#cdu-pluginslink-plugin)
* [`cdu plugins:uninstall PLUGIN...`](#cdu-pluginsuninstall-plugin)
* [`cdu plugins:uninstall PLUGIN...`](#cdu-pluginsuninstall-plugin-1)
* [`cdu plugins:uninstall PLUGIN...`](#cdu-pluginsuninstall-plugin-2)
* [`cdu plugins update`](#cdu-plugins-update)

## `cdu hello PERSON`

Say hello

```
USAGE
  $ cdu hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/carlosdnba/cdutils/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cdu hello world`

Say hello world

```
USAGE
  $ cdu hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cdu hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cdu help [COMMANDS]`

Display help for cdu.

```
USAGE
  $ cdu help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cdu.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.7/src/commands/help.ts)_

## `cdu plugins`

List installed plugins.

```
USAGE
  $ cdu plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cdu plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.0/src/commands/plugins/index.ts)_

## `cdu plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cdu plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cdu plugins add

EXAMPLES
  $ cdu plugins:install myplugin 

  $ cdu plugins:install https://github.com/someuser/someplugin

  $ cdu plugins:install someuser/someplugin
```

## `cdu plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cdu plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cdu plugins:inspect myplugin
```

## `cdu plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cdu plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cdu plugins add

EXAMPLES
  $ cdu plugins:install myplugin 

  $ cdu plugins:install https://github.com/someuser/someplugin

  $ cdu plugins:install someuser/someplugin
```

## `cdu plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cdu plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cdu plugins:link myplugin
```

## `cdu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdu plugins unlink
  $ cdu plugins remove
```

## `cdu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdu plugins unlink
  $ cdu plugins remove
```

## `cdu plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cdu plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cdu plugins unlink
  $ cdu plugins remove
```

## `cdu plugins update`

Update installed plugins.

```
USAGE
  $ cdu plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
