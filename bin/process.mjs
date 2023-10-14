#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import Install from './install.js';
import DevDependencies from '../src/devDependencies/index.js';
import React from '../src/react/index.js';
import Postgres from '../src/postgres/index.js';

const argv = yargs(hideBin(process.argv)).argv;

const workspace = argv.workspace;
const commands = [];

if (!workspace) {
  commands.push('-W');
} else {
  commands.push('workspace', workspace);
}

commands.push('add');

if (Object.hasOwn(argv, 'postgres')) {
  Install([...commands, ...Postgres.dependencies]);
} else if (Object.hasOwn(argv, 'react')) {
  Install([...commands, ...React.dependencies]);
  Install([...commands, '-D', ...React.devDependencies]);
} else {
  Install([...commands, '-D', ...DevDependencies]);
}


