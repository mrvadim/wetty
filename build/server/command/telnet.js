export function telnetOptions({ host, port }, user) {
    const telnet = ['telnet'];
    if (user) {
        telnet.push(...['-l', user]);
    }
    telnet.push(...[host, port]);
    return telnet;
}
//# sourceMappingURL=telnet.js.map