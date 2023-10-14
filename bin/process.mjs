#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import Install from './install.js';
import DevDependencies from '../src/devDependencies/index.js';
import React from '../src/react/index.js';

const argv = yargs(hideBin(process.argv)).argv;

console.log('argv', argv);
const workspace = argv.workspace;
console.log('workspace', workspace);
return;

const commands = ['add'];

if (!workspace) {
  commands.push('-W');
} else {
  commands.push('workspace', workspace);
}

if (Object.hasOwn(argv, 'react')) {
  console.log(100);
  Install([...commands, ...React.Dependencies]);
  Install([...commands, '-D', ...React.DevDependencies]);
} else {
  console.log(200);
  Install([...commands, '-D', ...DevDependencies]);
}


