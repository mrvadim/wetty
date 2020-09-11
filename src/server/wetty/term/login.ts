import { spawn } from 'node-pty';
import { join } from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as crypto from 'crypto';
import { xterm } from './xterm';

export function login(socket: SocketIO.Socket): Promise<string> {
  // Check request-header for username
  const remoteUser = socket.request.headers['remote-user'];
  if (remoteUser) {
    return new Promise(resolve => {
      resolve(remoteUser);
    });
  }

  let termPath = join(__dirname, 'buffer.js');

  if (termPath.match(/^\/snapshot\//)) {
    // Handle case for binary build with pkg: copy terminal.js from inside binary package to
    // temporary directory and use it from there.
    const fileData = fs.readFileSync(termPath);
    termPath = join(os.tmpdir(), `${crypto.randomFillSync(Buffer.alloc(10)).toString('hex')}.js`);
    fs.writeFileSync(termPath, fileData);
  }

  // Request carries no username information
  // Create terminal and ask user for username
  const term = spawn('/usr/bin/env', ['node', termPath], xterm);
  let buf = '';
  return new Promise((resolve, reject) => {
    term.on('exit', () => {
      resolve(buf);
    });
    term.on('data', data => {
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
