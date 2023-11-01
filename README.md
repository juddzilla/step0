# Step Zero

Install oft used dependencies with one npx command

** Please note, this is a yarn installer **

## Usage

From the root of the git repository, run the below command

`npx github:juddzilla/step0 install`

### Available Flags

- `--workspace <workspace name>`
- `--suite <suite name>`

If no flag is provided, the default installation are the 'devDependencies' at the root of the git repo

### Examples

`$ npx github:juddzilla/step0 install --suite react --workspace Web-Client`
Installs the React dependencies in the Web-Client workspace.

`$ npx github:juddzilla/step0 install --suite postgres --workspace Database-Library`
Installs the Postgres dependencies in the Database-Library workspace

`$ npx github:juddzilla/step0 install`
Installs the  dev dependencies at the root of the git repo.

## References

- [Iulian Preda](https://dev.to/ipreda/run-your-npx-script-directly-from-github-create-your-own-cli-commands-and-other-stories-4pn3)
- [Max/programonaut](https://www.programonaut.com/how-to-create-an-npx-project-boilerplate-command-step-by-step/)