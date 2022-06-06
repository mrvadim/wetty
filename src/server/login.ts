import fs from 'fs';
import os from 'os';
import crypto from 'crypto';
import type SocketIO from 'socket.io';
import * as pty from 'node-pty';
import { join, dirname, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';
import { xterm } from './shared/xterm.js';
import { logger } from '../shared/logger.js';

const executable = resolvePath(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'buffer.js',
);

export function login(socket: SocketIO.Socket): Promise<string> {
  // Check request-header for username
  const remoteUser = socket.request.headers['remote-user'];
  if (remoteUser) {
    return new Promise(resolve => {
      resolve(remoteUser);
    });
  }

  let termPath = '';

  if (executable.match(/^\/snapshot\//)) {
    // Handle case for binary build with pkg: copy terminal.js from inside binary package to
    // temporary directory and use it from there.
    const fileData = fs.readFileSync(executable);
    termPath = join(os.tmpdir(), `${crypto.randomFillSync(Buffer.alloc(10)).toString('hex')}.js`);
    fs.writeFileSync(termPath, fileData);
  }

  // Request carries no username information
  // Create terminal and ask user for username
  const term = pty.spawn('/usr/bin/env', ['node', termPath || executable], xterm);

  let buf = '';
  return new Promise((resolve, reject) => {
    term.on('exit', () => {
      if (termPath) {
        fs.unlink(termPath, err => {
          if (err) {
            logger.warn(err);
          }
        });
      }
      resolve(buf);
    });
    term.on('data', (data: string) => {
      socket.emit('data', data);
    });
    socket
      .on('input', (input: string) => {
        term.write(input);
        buf = /\177/.exec(input) ? buf.slice(0, -1) : buf + input;
      })
      .on('disconnect', () => {
        term.kill();
        reject();
      });
  });
}
