"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommand = getCommand;

var _url = require("url");

var _address = require("./command/address.js");

var _login = require("./command/login.js");

var _ssh = require("./command/ssh.js");

var _telnet = require("./command/telnet.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var localhost = function localhost(host) {
  return process.getuid() === 0 && (host === 'localhost' || host === '0.0.0.0' || host === '127.0.0.1');
};

var urlArgs = function urlArgs(url, def) {
  return Object.assign(def, Object.fromEntries(url.searchParams.entries()));
};

function getCommand(_ref, _ref2, command, forcessh) {
  var headers = _ref.request.headers,
      remoteAddress = _ref.client.conn.remoteAddress;
  var user = _ref2.user,
      host = _ref2.host,
      port = _ref2.port,
      auth = _ref2.auth,
      pass = _ref2.pass,
      key = _ref2.key,
      knownHosts = _ref2.knownHosts,
      config = _ref2.config,
      telnetPort = _ref2.telnetPort;

  if (!forcessh && localhost(host)) {
    return [(0, _login.loginOptions)(command, remoteAddress), true, false];
  }

  var url = new _url.URL(headers.referer);
  var isTelnet = url.pathname.startsWith('/wetty/telnet');
  var args = urlArgs(url, {
    host: host,
    port: isTelnet ? "".concat(telnetPort) : "".concat(port),
    pass: pass || '',
    command: command,
    auth: auth,
    knownHosts: knownHosts,
    config: config || ''
  });

  if (isTelnet) {
    var _url$pathname$split = url.pathname.split('/'),
        _url$pathname$split2 = _slicedToArray(_url$pathname$split, 4),
        telnetUser = _url$pathname$split2[3];

    return [(0, _telnet.telnetOptions)(args, telnetUser), !telnetUser, true];
  }

  var sshAddress = (0, _address.address)(headers, user, args.host);
  args.host = sshAddress;
  return [(0, _ssh.sshOptions)(args, key), user !== '' || user.includes('@') || sshAddress.includes('@'), false];
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2NvbW1hbmQuanMiLCJuYW1lcyI6WyJsb2NhbGhvc3QiLCJob3N0IiwicHJvY2VzcyIsImdldHVpZCIsInVybEFyZ3MiLCJ1cmwiLCJkZWYiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tRW50cmllcyIsInNlYXJjaFBhcmFtcyIsImVudHJpZXMiLCJnZXRDb21tYW5kIiwiY29tbWFuZCIsImZvcmNlc3NoIiwiaGVhZGVycyIsInJlcXVlc3QiLCJyZW1vdGVBZGRyZXNzIiwiY2xpZW50IiwiY29ubiIsInVzZXIiLCJwb3J0IiwiYXV0aCIsInBhc3MiLCJrZXkiLCJrbm93bkhvc3RzIiwiY29uZmlnIiwidGVsbmV0UG9ydCIsImxvZ2luT3B0aW9ucyIsIlVSTCIsInJlZmVyZXIiLCJpc1RlbG5ldCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImFyZ3MiLCJzcGxpdCIsInRlbG5ldFVzZXIiLCJ0ZWxuZXRPcHRpb25zIiwic3NoQWRkcmVzcyIsImFkZHJlc3MiLCJzc2hPcHRpb25zIiwiaW5jbHVkZXMiXSwic291cmNlcyI6WyJzZXJ2ZXIvY29tbWFuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVUkwgfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgYWRkcmVzcyB9IGZyb20gJy4vY29tbWFuZC9hZGRyZXNzLmpzJztcbmltcG9ydCB7IGxvZ2luT3B0aW9ucyB9IGZyb20gJy4vY29tbWFuZC9sb2dpbi5qcyc7XG5pbXBvcnQgeyBzc2hPcHRpb25zIH0gZnJvbSAnLi9jb21tYW5kL3NzaC5qcyc7XG5pbXBvcnQgeyB0ZWxuZXRPcHRpb25zIH0gZnJvbSAnLi9jb21tYW5kL3RlbG5ldC5qcyc7XG5jb25zdCBsb2NhbGhvc3QgPSAoaG9zdCkgPT4gcHJvY2Vzcy5nZXR1aWQoKSA9PT0gMCAmJlxuICAgIChob3N0ID09PSAnbG9jYWxob3N0JyB8fCBob3N0ID09PSAnMC4wLjAuMCcgfHwgaG9zdCA9PT0gJzEyNy4wLjAuMScpO1xuY29uc3QgdXJsQXJncyA9ICh1cmwsIGRlZikgPT4gT2JqZWN0LmFzc2lnbihkZWYsIE9iamVjdC5mcm9tRW50cmllcyh1cmwuc2VhcmNoUGFyYW1zLmVudHJpZXMoKSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1hbmQoeyByZXF1ZXN0OiB7IGhlYWRlcnMgfSwgY2xpZW50OiB7IGNvbm46IHsgcmVtb3RlQWRkcmVzcyB9LCB9LCB9LCB7IHVzZXIsIGhvc3QsIHBvcnQsIGF1dGgsIHBhc3MsIGtleSwga25vd25Ib3N0cywgY29uZmlnLCB0ZWxuZXRQb3J0IH0sIGNvbW1hbmQsIGZvcmNlc3NoKSB7XG4gICAgaWYgKCFmb3JjZXNzaCAmJiBsb2NhbGhvc3QoaG9zdCkpIHtcbiAgICAgICAgcmV0dXJuIFtsb2dpbk9wdGlvbnMoY29tbWFuZCwgcmVtb3RlQWRkcmVzcyksIHRydWUsIGZhbHNlXTtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChoZWFkZXJzLnJlZmVyZXIpO1xuICAgIGNvbnN0IGlzVGVsbmV0ID0gdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy93ZXR0eS90ZWxuZXQnKTtcbiAgICBjb25zdCBhcmdzID0gdXJsQXJncyh1cmwsIHtcbiAgICAgICAgaG9zdCxcbiAgICAgICAgcG9ydDogaXNUZWxuZXQgPyBgJHt0ZWxuZXRQb3J0fWAgOiBgJHtwb3J0fWAsXG4gICAgICAgIHBhc3M6IHBhc3MgfHwgJycsXG4gICAgICAgIGNvbW1hbmQsXG4gICAgICAgIGF1dGgsXG4gICAgICAgIGtub3duSG9zdHMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnIHx8ICcnLFxuICAgIH0pO1xuICAgIGlmIChpc1RlbG5ldCkge1xuICAgICAgICBjb25zdCBbLCAsICwgdGVsbmV0VXNlcl0gPSB1cmwucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRlbG5ldE9wdGlvbnMoYXJncywgdGVsbmV0VXNlciksXG4gICAgICAgICAgICAhdGVsbmV0VXNlcixcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgXTtcbiAgICB9XG4gICAgY29uc3Qgc3NoQWRkcmVzcyA9IGFkZHJlc3MoaGVhZGVycywgdXNlciwgYXJncy5ob3N0KTtcbiAgICBhcmdzLmhvc3QgPSBzc2hBZGRyZXNzO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNzaE9wdGlvbnMoYXJncywga2V5KSxcbiAgICAgICAgdXNlciAhPT0gJycgfHwgdXNlci5pbmNsdWRlcygnQCcpIHx8IHNzaEFkZHJlc3MuaW5jbHVkZXMoJ0AnKSxcbiAgICAgICAgZmFsc2VcbiAgICBdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWFuZC5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0VBQUEsT0FBVUMsT0FBTyxDQUFDQyxNQUFSLE9BQXFCLENBQXJCLEtBQ3ZCRixJQUFJLEtBQUssV0FBVCxJQUF3QkEsSUFBSSxLQUFLLFNBQWpDLElBQThDQSxJQUFJLEtBQUssV0FEaEMsQ0FBVjtBQUFBLENBQWxCOztBQUVBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtFQUFBLE9BQWNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixHQUFkLEVBQW1CQyxNQUFNLENBQUNFLFdBQVAsQ0FBbUJKLEdBQUcsQ0FBQ0ssWUFBSixDQUFpQkMsT0FBakIsRUFBbkIsQ0FBbkIsQ0FBZDtBQUFBLENBQWhCOztBQUNPLFNBQVNDLFVBQVQsY0FBNEpDLE9BQTVKLEVBQXFLQyxRQUFySyxFQUErSztFQUFBLElBQTlJQyxPQUE4SSxRQUF6SkMsT0FBeUosQ0FBOUlELE9BQThJO0VBQUEsSUFBakhFLGFBQWlILFFBQW5JQyxNQUFtSSxDQUF6SEMsSUFBeUgsQ0FBakhGLGFBQWlIO0VBQUEsSUFBeEZHLElBQXdGLFNBQXhGQSxJQUF3RjtFQUFBLElBQWxGbkIsSUFBa0YsU0FBbEZBLElBQWtGO0VBQUEsSUFBNUVvQixJQUE0RSxTQUE1RUEsSUFBNEU7RUFBQSxJQUF0RUMsSUFBc0UsU0FBdEVBLElBQXNFO0VBQUEsSUFBaEVDLElBQWdFLFNBQWhFQSxJQUFnRTtFQUFBLElBQTFEQyxHQUEwRCxTQUExREEsR0FBMEQ7RUFBQSxJQUFyREMsVUFBcUQsU0FBckRBLFVBQXFEO0VBQUEsSUFBekNDLE1BQXlDLFNBQXpDQSxNQUF5QztFQUFBLElBQWpDQyxVQUFpQyxTQUFqQ0EsVUFBaUM7O0VBQ2xMLElBQUksQ0FBQ2IsUUFBRCxJQUFhZCxTQUFTLENBQUNDLElBQUQsQ0FBMUIsRUFBa0M7SUFDOUIsT0FBTyxDQUFDLElBQUEyQixtQkFBQSxFQUFhZixPQUFiLEVBQXNCSSxhQUF0QixDQUFELEVBQXVDLElBQXZDLEVBQTZDLEtBQTdDLENBQVA7RUFDSDs7RUFDRCxJQUFNWixHQUFHLEdBQUcsSUFBSXdCLFFBQUosQ0FBUWQsT0FBTyxDQUFDZSxPQUFoQixDQUFaO0VBQ0EsSUFBTUMsUUFBUSxHQUFHMUIsR0FBRyxDQUFDMkIsUUFBSixDQUFhQyxVQUFiLENBQXdCLGVBQXhCLENBQWpCO0VBQ0EsSUFBTUMsSUFBSSxHQUFHOUIsT0FBTyxDQUFDQyxHQUFELEVBQU07SUFDdEJKLElBQUksRUFBSkEsSUFEc0I7SUFFdEJvQixJQUFJLEVBQUVVLFFBQVEsYUFBTUosVUFBTixjQUF3Qk4sSUFBeEIsQ0FGUTtJQUd0QkUsSUFBSSxFQUFFQSxJQUFJLElBQUksRUFIUTtJQUl0QlYsT0FBTyxFQUFQQSxPQUpzQjtJQUt0QlMsSUFBSSxFQUFKQSxJQUxzQjtJQU10QkcsVUFBVSxFQUFWQSxVQU5zQjtJQU90QkMsTUFBTSxFQUFFQSxNQUFNLElBQUk7RUFQSSxDQUFOLENBQXBCOztFQVNBLElBQUlLLFFBQUosRUFBYztJQUNWLDBCQUEyQjFCLEdBQUcsQ0FBQzJCLFFBQUosQ0FBYUcsS0FBYixDQUFtQixHQUFuQixDQUEzQjtJQUFBO0lBQUEsSUFBYUMsVUFBYjs7SUFDQSxPQUFPLENBQ0gsSUFBQUMscUJBQUEsRUFBY0gsSUFBZCxFQUFvQkUsVUFBcEIsQ0FERyxFQUVILENBQUNBLFVBRkUsRUFHSCxJQUhHLENBQVA7RUFLSDs7RUFDRCxJQUFNRSxVQUFVLEdBQUcsSUFBQUMsZ0JBQUEsRUFBUXhCLE9BQVIsRUFBaUJLLElBQWpCLEVBQXVCYyxJQUFJLENBQUNqQyxJQUE1QixDQUFuQjtFQUNBaUMsSUFBSSxDQUFDakMsSUFBTCxHQUFZcUMsVUFBWjtFQUNBLE9BQU8sQ0FDSCxJQUFBRSxlQUFBLEVBQVdOLElBQVgsRUFBaUJWLEdBQWpCLENBREcsRUFFSEosSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxDQUFDcUIsUUFBTCxDQUFjLEdBQWQsQ0FBZixJQUFxQ0gsVUFBVSxDQUFDRyxRQUFYLENBQW9CLEdBQXBCLENBRmxDLEVBR0gsS0FIRyxDQUFQO0FBS0gifQ==
