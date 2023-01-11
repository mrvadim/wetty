import type SocketIO from 'socket.io';
import type { SSH, SSL, Server } from './shared/interfaces.js';
export declare function start(ssh?: SSH, serverConf?: Server, command?: string, forcessh?: boolean, ssl?: SSL, cb?: (text: string, connArgs?: string[]) => void): Promise<SocketIO.Server>;
