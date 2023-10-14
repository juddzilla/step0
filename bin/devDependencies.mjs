#!/usr/bin/env node
import yargs from 'yargs';
import Install from './install.mjs';
import Deps from '../src/devDependencies/index.js';

const argv = yargs.argv;
console.log('argv', argv);

// Install(['add', '-WD', ...Deps]);