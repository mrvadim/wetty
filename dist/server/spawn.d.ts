import type SocketIO from 'socket.io';
export declare function spawn(socket: SocketIO.Socket, args: string[], cb?: (data: string, connArgs?: string[]) => void): Promise<void>;
