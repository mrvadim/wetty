import { URL } from 'url';
import { address } from './command/address.js';
import { loginOptions } from './command/login.js';
import { sshOptions } from './command/ssh.js';
import { telnetOptions } from './command/telnet.js';
const localhost = (host) => process.getuid() === 0 &&
    (host === 'localhost' || host === '0.0.0.0' || host === '127.0.0.1');
const urlArgs = (url, def) => Object.assign(def, Object.fromEntries(url.searchParams.entries()));
export function getCommand({ request: { headers }, client: { conn: { remoteAddress }, }, }, { user, host, port, auth, pass, key, knownHosts, config, telnetPort }, command, forcessh) {
    if (!forcessh && localhost(host)) {
        return [loginOptions(command, remoteAddress), true, false];
    }
    const url = new URL(headers.referer);
    const isTelnet = url.pathname.startsWith('/wetty/telnet');
    const args = urlArgs(url, {
        host,
        port: isTelnet ? `${telnetPort}` : `${port}`,
        pass: pass || '',
        command,
        auth,
        knownHosts,
        config: config || '',
    });
    if (isTelnet) {
        const [, , , telnetUser] = url.pathname.split('/');
        return [
            telnetOptions(args, telnetUser),
            !telnetUser,
            true
        ];
    }
    const sshAddress = address(headers, user, args.host);
    args.host = sshAddress;
    return [
        sshOptions(args, key),
        user !== '' || user.includes('@') || sshAddress.includes('@'),
        false
    ];
}
//# sourceMappingURL=command.js.map