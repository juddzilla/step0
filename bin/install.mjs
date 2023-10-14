#!/usr/bin/env node
import { spawn }  from 'child_process';
import { glob } from 'glob';
import path from 'path';

const find = async (dirPath) => {
  console.log('dirPath', dirPath);
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
    console.log(data.toString());
  });

  exec.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  exec.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });
}

(async function() {
  const devDeps = path.join('./devDependencies', '*.js');
  const files = await find(devDeps);

  let packages = [];
  await Promise.all(files.map(async (file) => {
    const dep = await import(file);

    packages = [...packages, ...dep.default];
  }));

  execute(['add', '-WD', ...packages]);
})()