import { getCommand } from './server/command.js';
import { logger } from './shared/logger.js';
import { login } from './server/login.js';
import { server } from './server/socketServer.js';
import { spawn } from './server/spawn.js';
import { sshDefault, serverDefault, forceSSHDefault, defaultCommand, } from './shared/defaults.js';
import { escapeShell } from './server/shared/shell.js';
export async function start(ssh = sshDefault, serverConf = serverDefault, command = defaultCommand, forcessh = forceSSHDefault, ssl) {
    if (ssh.key) {
        logger.warn(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
! Password-less auth enabled using private key from ${ssh.key}.
! This is dangerous, anything that reaches the wetty server
! will be able to run remote operations without authentication.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    }
    const io = await server(serverConf, ssl);
    io.on('connection', async (socket) => {
        logger.info('Connection accepted.');
        const [args, sshUser, isTelnet] = getCommand(socket, ssh, command, forcessh);
        logger.debug('Command Generated', {
            user: sshUser,
            cmd: args.join(' '),
        });
        try {
            if (!sshUser && !isTelnet) {
                const username = await login(socket);
                args[1] = `${escapeShell(username.trim())}@${args[1]}`;
                logger.debug('Spawning term', {
                    username: username.trim(),
                    cmd: args.join(' '),
                });
            }
            await spawn(socket, args);
        }
        catch (error) {
            logger.info('Disconnect signal sent', { err: error });
        }
    });
    return io;
}
//# sourceMappingURL=server.js.map