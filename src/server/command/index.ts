import * as url from 'url';
import { Socket } from 'socket.io';
import { SSH } from '../interfaces';
import address from './address';
import loginOptions from './login';
import sshOptions from './ssh';

const localhost = (host: string): boolean =>
  process.getuid() === 0 &&
  (host === 'localhost' || host === '0.0.0.0' || host === '127.0.0.1');

const urlArgs = (
  referer: string,
  def: { [s: string]: string | undefined }
): { [s: string]: string } =>
  Object.assign(def, url.parse(referer, true).query);

export default (
  {
    request: {
      headers: { referer },
    },
    client: {
      conn: { remoteAddress },
    },
  }: Socket,
  { user, host, port, auth, pass, key, knownhosts }: SSH,
  command: string,
  forcessh: boolean
): { args: string[]; user: boolean } => {
  const extendedArgs = urlArgs(referer, {
    port: `${port}`,
    pass: pass || '',
    command,
    auth,
    knownhosts,
  });

  const hostAddress = address(referer, user, extendedArgs.host || host);

  return {
    args: !forcessh && localhost(host)
      ? loginOptions(command, remoteAddress)
      : sshOptions(
          { 
            ...extendedArgs,
            host: hostAddress
          },
          key
        ),
    user:
      (!forcessh && localhost(host)) ||
      user !== '' ||
      user.includes('@') ||
      hostAddress.includes('@'),
  }
};
