#!/usr/bin/env node
import Install from './install.mjs';
import Deps from '../src/devDependencies/index.js';

Install(['add', '-WD', ...Deps]);