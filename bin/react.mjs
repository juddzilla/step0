#!/usr/bin/env node
import Install from './install.mjs';
import React from '../src/react/index.js';

const { Dependencies, DevDependencies } = React;

Install(['add', ...Dependencies])
Install(['add', '-D', ...DevDependencies]);