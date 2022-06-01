import type { Socket } from 'socket.io';
import type { SSH } from '../shared/interfaces';
export declare function getCommand({ request: { headers }, client: { conn: { remoteAddress }, }, }: Socket, { user, host, port, auth, pass, key, knownHosts, config, telnetPort }: SSH, command: string, forcessh: boolean): [string[], boolean, boolean];
