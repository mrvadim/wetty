import fs from 'fs-extra';
import path from 'path';
import JSON5 from 'json5';
import isUndefined from 'lodash/isUndefined.js';
import { sshDefault, serverDefault, forceSSHDefault, defaultCommand, } from './defaults.js';
function ensureBoolean(value) {
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            return true;
        default:
            return false;
    }
}
export async function loadConfigFile(filepath) {
    if (isUndefined(filepath)) {
        return {
            ssh: sshDefault,
            server: serverDefault,
            command: defaultCommand,
            forceSSH: forceSSHDefault,
        };
    }
    const content = await fs.readFile(path.resolve(filepath));
    const parsed = JSON5.parse(content.toString());
    return {
        ssh: isUndefined(parsed.ssh)
            ? sshDefault
            : Object.assign(sshDefault, parsed.ssh),
        server: isUndefined(parsed.server)
            ? serverDefault
            : Object.assign(serverDefault, parsed.server),
        command: isUndefined(parsed.command) ? defaultCommand : `${parsed.command}`,
        forceSSH: isUndefined(parsed.forceSSH)
            ? forceSSHDefault
            : ensureBoolean(parsed.forceSSH),
        ssl: parsed.ssl,
    };
}
const objectAssign = (target, source) => Object.fromEntries(Object.entries(source).map(([key, value]) => [
    key,
    isUndefined(source[key]) ? target[key] : value,
]));
export function mergeCliConf(opts, config) {
    const ssl = {
        key: opts['ssl-key'],
        cert: opts['ssl-cert'],
        ...config.ssl,
    };
    return {
        ssh: objectAssign(config.ssh, {
            user: opts['ssh-user'],
            host: opts['ssh-host'],
            auth: opts['ssh-auth'],
            port: opts['ssh-port'],
            pass: opts['ssh-pass'],
            key: opts['ssh-key'],
            allowRemoteHosts: opts['allow-remote-hosts'],
            config: opts['ssh-config'],
            knownHosts: opts['known-hosts'],
        }),
        server: objectAssign(config.server, {
            base: opts.base,
            host: opts.host,
            port: opts.port,
            title: opts.title,
            allowIframe: opts['allow-iframe'],
        }),
        command: isUndefined(opts.command) ? config.command : `${opts.command}`,
        forceSSH: isUndefined(opts['force-ssh'])
            ? config.forceSSH
            : ensureBoolean(opts['force-ssh']),
        ssl: isUndefined(ssl.key) || isUndefined(ssl.cert) ? undefined : ssl,
    };
}
//# sourceMappingURL=config.js.map