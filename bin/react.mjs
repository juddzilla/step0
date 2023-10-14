#!/usr/bin/env node
import Install from './install.mjs';
import React from '../src/react/index.js';

const { Dependencies, DevDependencies } = React;

console.log('React', React);
console.log('ARGV', process.argv);
// Install(['add', ...Dependencies])
// Install(['add', '-D', ...DevDependencies]);