import { escapeShell } from '../shared/shell.js';
export function address(headers, user, host) {
    const remoteUser = headers['remote-user'];
    if (remoteUser) {
        return `${escapeShell(remoteUser)}@${host}`;
    }
    const match = headers.referer.match(/.+\/ssh\/([^/]+)$/);
    if (match) {
        const username = escapeShell(match[1].split('?')[0]);
        return `${username}@${host}`;
    }
    return user ? `${escapeShell(user)}@${host}` : host;
}
//# sourceMappingURL=address.js.map