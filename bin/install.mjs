#!/usr/bin/env node
import { spawn }  from 'child_process';
import Deps from './devDependencies/index.js';

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

execute(['add', '-WD', ...Deps]);