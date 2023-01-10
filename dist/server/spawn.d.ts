import type SocketIO from 'socket.io';
export declare function spawn(socket: SocketIO.Socket, args: string[], cb?: (t: string) => string): Promise<void>;
