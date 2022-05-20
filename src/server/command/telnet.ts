/**
 * Generates new telnet command.
 *
 * @param param0 Host and port for connecting.
 * @param user Telnet user.
 * @returns Splitted telnet command.
 */
export function telnetOptions({
  host,
  port
}: Record<string, string>, user?: string): string[] {
  const telnet = ['telnet'];

  if (user) {
    telnet.push(...['-l', user])
  }

  telnet.push(...[host, port]);

  return telnet;
}