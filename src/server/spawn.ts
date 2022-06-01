import type SocketIO from 'socket.io';
import isUndefined from 'lodash/isUndefined.js';
import * as pty from 'node-pty';
import os from 'os';
import { logger } from '../shared/logger.js';
import { xterm } from './shared/xterm.js';
import { envVersion } from './spawn/env.js';

export async function spawn(
  socket: SocketIO.Socket,
  args: string[],
): Promise<void> {
  const cmd = os.platform() === 'darwin' || (await envVersion()) >= 9 ? ['-S', ...args] : args;
  logger.debug('Spawning PTTY', { cmd });
  const term = pty.spawn('/usr/bin/env', cmd, xterm);
  const { pid } = term;
  const address = args[0] === 'ssh' ? args[1] : 'localhost';
  logger.info('Process Started on behalf of user', {
    pid,
    address,
  });
  socket.emit('login');
  term.on('exit', (code: number) => {
    logger.info('Process exited', { code, pid });
    socket.emit('logout');
    socket
      .removeAllListeners('disconnect')
      .removeAllListeners('resize')
      .removeAllListeners('input');
  });
  term.on('data', (data: string) => {
    socket.emit('data', data);
  });
  socket
    .on('resize', ({ cols, rows }) => {
      term.resize(cols, rows);
    })
    .on('input', input => {
      if (!isUndefined(term)) term.write(input);
    })
    .on('disconnect', () => {
      term.kill();
      logger.info('Process exited', { code: 0, pid });
    });
}
