#!/usr/bin/env node
import { spawn }  from 'child_process';
import Deps from '../src/devDependencies/index.js';

export default function(command) {
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
