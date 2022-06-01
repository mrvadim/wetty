import io from "../../web_modules/pkg/socket.io-client.js";
const userRegex = /(?:telnet|ssh)(?:$|\/[^/]+$)/;
export const trim = (str) => str.replace(/\/*$/, "");
const socketBase = trim(window.location.pathname).replace(userRegex, "");
export const socket = io(window.location.origin, {
  path: `${trim(socketBase)}/socket.io`
});
