import { spawn }  from 'child_process';
import { glob } from 'glob';
import path from 'path';

const find = async (dirPath) => {
  try {
    return await glob.sync(dirPath, { nocase: true });
  } catch (err) {
    console.warn('find files err', err);
    return `Find files error: ${err}`;
  }
};

function execute(command) {
  const exec = spawn('yarn', command);

  exec.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  exec.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  exec.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });
}

(async function() {
  const devDeps = path.join(process.cwd(), 'devDependencies', '*.js');
  const files = await find(devDeps);
  console.log('files', files);
  let packages = [];
  await Promise.all(files.map(async (file) => {
    const dep = await import(file);

    packages = [...packages, ...dep.default];
  }));
  console.log('packages', packages);
  execute(['add', '-WD', ...packages]);
})()
// const packages = [
//   'eslint',
//   'eslint-config-airbnb',
//   'eslint-plugin-import',
//   'eslint-plugin-jest',
//   'eslint-plugin-jsx-a11y',
//   'eslint-plugin-react',
//   'eslint-plugin-react-hooks',
// ];
//
// const manager = process.argv[2];
//

// if (manager === 'yarn') {
//   // -W === ignore-workspace-root-check
//   execute(['yarn add -WD', ...packages].join(' '));
// }