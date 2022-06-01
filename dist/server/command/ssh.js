"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sshOptions = sshOptions;

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined.js"));

var _logger = require("../../shared/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sshOptions(_ref, key) {
  var pass = _ref.pass,
      path = _ref.path,
      command = _ref.command,
      host = _ref.host,
      port = _ref.port,
      auth = _ref.auth,
      knownHosts = _ref.knownHosts,
      config = _ref.config;
  var cmd = parseCommand(command, path);
  var hostChecking = knownHosts !== '/dev/null' ? 'yes' : 'no';

  _logger.logger.info("Authentication Type: ".concat(auth));

  var sshRemoteOptsBase = ['ssh', host, '-t'];

  if (!(0, _isUndefined["default"])(config) && config !== '') {
    sshRemoteOptsBase = sshRemoteOptsBase.concat(['-F', config]);
  }

  sshRemoteOptsBase = sshRemoteOptsBase.concat(['-p', port, '-o', "PreferredAuthentications=".concat(auth), '-o', "UserKnownHostsFile=".concat(knownHosts), '-o', "StrictHostKeyChecking=".concat(hostChecking)]);

  if (!(0, _isUndefined["default"])(key)) {
    return sshRemoteOptsBase.concat(['-i', key, cmd]);
  }

  if (pass !== '') {
    return ['sshpass', '-p', pass].concat(sshRemoteOptsBase, [cmd]);
  }

  if (auth === 'none') {
    sshRemoteOptsBase.splice(sshRemoteOptsBase.indexOf('-o'), 2);
  }

  return cmd === '' ? sshRemoteOptsBase : sshRemoteOptsBase.concat([cmd]);
}

function parseCommand(command, path) {
  if (command === 'login' && (0, _isUndefined["default"])(path)) return '';
  return !(0, _isUndefined["default"])(path) ? "$SHELL -c \"cd ".concat(path, ";").concat(command === 'login' ? '$SHELL' : command, "\"") : command;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2NvbW1hbmQvc3NoLmpzIiwibmFtZXMiOlsic3NoT3B0aW9ucyIsImtleSIsInBhc3MiLCJwYXRoIiwiY29tbWFuZCIsImhvc3QiLCJwb3J0IiwiYXV0aCIsImtub3duSG9zdHMiLCJjb25maWciLCJjbWQiLCJwYXJzZUNvbW1hbmQiLCJob3N0Q2hlY2tpbmciLCJsb2dnZXIiLCJpbmZvIiwic3NoUmVtb3RlT3B0c0Jhc2UiLCJpc1VuZGVmaW5lZCIsImNvbmNhdCIsInNwbGljZSIsImluZGV4T2YiXSwic291cmNlcyI6WyJzZXJ2ZXIvY29tbWFuZC9zc2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC9pc1VuZGVmaW5lZC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9nZ2VyLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBzc2hPcHRpb25zKHsgcGFzcywgcGF0aCwgY29tbWFuZCwgaG9zdCwgcG9ydCwgYXV0aCwga25vd25Ib3N0cywgY29uZmlnLCB9LCBrZXkpIHtcbiAgICBjb25zdCBjbWQgPSBwYXJzZUNvbW1hbmQoY29tbWFuZCwgcGF0aCk7XG4gICAgY29uc3QgaG9zdENoZWNraW5nID0ga25vd25Ib3N0cyAhPT0gJy9kZXYvbnVsbCcgPyAneWVzJyA6ICdubyc7XG4gICAgbG9nZ2VyLmluZm8oYEF1dGhlbnRpY2F0aW9uIFR5cGU6ICR7YXV0aH1gKTtcbiAgICBsZXQgc3NoUmVtb3RlT3B0c0Jhc2UgPSBbJ3NzaCcsIGhvc3QsICctdCddO1xuICAgIGlmICghaXNVbmRlZmluZWQoY29uZmlnKSAmJiBjb25maWcgIT09ICcnKSB7XG4gICAgICAgIHNzaFJlbW90ZU9wdHNCYXNlID0gc3NoUmVtb3RlT3B0c0Jhc2UuY29uY2F0KFsnLUYnLCBjb25maWddKTtcbiAgICB9XG4gICAgc3NoUmVtb3RlT3B0c0Jhc2UgPSBzc2hSZW1vdGVPcHRzQmFzZS5jb25jYXQoW1xuICAgICAgICAnLXAnLFxuICAgICAgICBwb3J0LFxuICAgICAgICAnLW8nLFxuICAgICAgICBgUHJlZmVycmVkQXV0aGVudGljYXRpb25zPSR7YXV0aH1gLFxuICAgICAgICAnLW8nLFxuICAgICAgICBgVXNlcktub3duSG9zdHNGaWxlPSR7a25vd25Ib3N0c31gLFxuICAgICAgICAnLW8nLFxuICAgICAgICBgU3RyaWN0SG9zdEtleUNoZWNraW5nPSR7aG9zdENoZWNraW5nfWAsXG4gICAgXSk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChrZXkpKSB7XG4gICAgICAgIHJldHVybiBzc2hSZW1vdGVPcHRzQmFzZS5jb25jYXQoWyctaScsIGtleSwgY21kXSk7XG4gICAgfVxuICAgIGlmIChwYXNzICE9PSAnJykge1xuICAgICAgICByZXR1cm4gWydzc2hwYXNzJywgJy1wJywgcGFzc10uY29uY2F0KHNzaFJlbW90ZU9wdHNCYXNlLCBbY21kXSk7XG4gICAgfVxuICAgIGlmIChhdXRoID09PSAnbm9uZScpIHtcbiAgICAgICAgc3NoUmVtb3RlT3B0c0Jhc2Uuc3BsaWNlKHNzaFJlbW90ZU9wdHNCYXNlLmluZGV4T2YoJy1vJyksIDIpO1xuICAgIH1cbiAgICByZXR1cm4gY21kID09PSAnJyA/IHNzaFJlbW90ZU9wdHNCYXNlIDogc3NoUmVtb3RlT3B0c0Jhc2UuY29uY2F0KFtjbWRdKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ29tbWFuZChjb21tYW5kLCBwYXRoKSB7XG4gICAgaWYgKGNvbW1hbmQgPT09ICdsb2dpbicgJiYgaXNVbmRlZmluZWQocGF0aCkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHBhdGgpXG4gICAgICAgID8gYCRTSEVMTCAtYyBcImNkICR7cGF0aH07JHtjb21tYW5kID09PSAnbG9naW4nID8gJyRTSEVMTCcgOiBjb21tYW5kfVwiYFxuICAgICAgICA6IGNvbW1hbmQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zc2guanMubWFwIl0sIm1h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
