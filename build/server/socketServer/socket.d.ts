/// <reference types="express-serve-static-core" />
/// <reference types="compression" />
import type express from 'express';
import type { SSLBuffer } from '../../shared/interfaces.js';
export declare const listen: (app: express.Express, host: string, port: number, path: string, { key, cert }: SSLBuffer) => SocketIO.Server;
