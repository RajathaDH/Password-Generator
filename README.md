# Password-Generator

A command line tool to generate passwords.

### Installation

1. Clone this repository.
2. Run `npm install` inside directory to install dependencies.

### Usage

- Run `node index.js` to run the application.
- Run `npm link` to add a global command.
    - Run `rd-pass-gen` in any command line interface (CLI) to generate a new password.

### Arguments

- Length of password (default is 8)
    - `-l <length>` or `--length <length>`
    - Example: `node index --length=20` or `node index -l 20`
    - Global command: `rd-pass-gen --length=20` or `rd-pass-gen -l 20`
- Allow numbers in password
    - Add flag `--numbers` or `-n`
    - Example: `node index -n`
    - Global command: `rd-pass-gen -n`
- Allow symbols in password
    - Add flag `--symbols` or `-s`
    - Example: `node index -s`
    - Global command: `rd-pass-gen -s`

Multiple arguments can be joined together.
- `node index -l 20 -n -s` or `node index -l 20 -ns`

Sample usage.
- `rd-pass-gen -l 20 -ns`