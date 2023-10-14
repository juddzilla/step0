import Babel from './babel.js';
import Linting from './linting.js';
import Testing from './testing.js';
import YarnWorkspace from './yarn-workspace.js';

export default [
    ...Babel,
    ...Linting,
    ...Testing,
    ...YarnWorkspace,
]