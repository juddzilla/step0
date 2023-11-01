#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import Install from '../src/install.js';
import DevDependencies from '../src/devDependencies/index.js';
import Fastify from '../src/fastify/index.js';
import Postgres from '../src/postgres/index.js';
import Postcss from '../src/postcss/index.js';
import React from '../src/react/index.js';

const argv = yargs(hideBin(process.argv)).argv;

const workspace = argv.workspace;
const commands = [];

if (!workspace) {
  commands.push('-W');
} else {
  commands.push('workspace', workspace);
}

commands.push('add');

const map = {
  fastify: Fastify,
  postgres: Postgres,
  postcss: Postcss,
  react: React,
};

if (Object.hasOwn(argv, 'suite') && Object.hasOwn(map, argv.suite)) {
  const mapping = map[argv.suite];

  if (mapping.dependencies) {
    Install([...commands, ...mapping.dependencies]);
  }

  if (mapping.devDependencies) {
    Install([...commands, '-D', ...mapping.devDependencies]);
  }

} else {
  Install([...commands, '-D', ...DevDependencies]);
}


