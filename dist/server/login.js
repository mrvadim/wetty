"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _fs = _interopRequireDefault(require("fs"));

var _os = _interopRequireDefault(require("os"));

var _crypto = _interopRequireDefault(require("crypto"));

var pty = _interopRequireWildcard(require("node-pty"));

var _path = require("path");

var _url = require("url");

var _xterm = require("./shared/xterm.js");

var _logger = require("../shared/logger.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var executable = (0, _path.resolve)((0, _path.dirname)((0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString())), '..', 'buffer.js');

function login(socket) {
  var remoteUser = socket.request.headers['remote-user'];

  if (remoteUser) {
    return new Promise(function (resolve) {
      resolve(remoteUser);
    });
  }

  var termPath = '';

  if (executable.match(/^\/snapshot\//)) {
    var fileData = _fs["default"].readFileSync(executable);

    termPath = (0, _path.join)(_os["default"].tmpdir(), "".concat(_crypto["default"].randomFillSync(Buffer.alloc(10)).toString('hex'), ".js"));

    _fs["default"].writeFileSync(termPath, fileData);
  }

  var term = pty.spawn('/usr/bin/env', ['node', termPath || executable], _xterm.xterm);
  var buf = '';
  return new Promise(function (resolve, reject) {
    term.on('exit', function () {
      if (termPath) {
        _fs["default"].unlink(termPath, function (err) {
          if (err) {
            _logger.logger.warn(err);
          }
        });
      }

      resolve(buf);
    });
    term.on('data', function (data) {
      socket.emit('data', data);
    });
    socket.on('input', function (input) {
      term.write(input);
      buf = /\177/.exec(input) ? buf.slice(0, -1) : buf + input;
    }).on('disconnect', function () {
      term.kill();
      reject();
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2xvZ2luLmpzIiwibmFtZXMiOlsiZXhlY3V0YWJsZSIsInJlc29sdmVQYXRoIiwiZGlybmFtZSIsImZpbGVVUkxUb1BhdGgiLCJsb2dpbiIsInNvY2tldCIsInJlbW90ZVVzZXIiLCJyZXF1ZXN0IiwiaGVhZGVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGVybVBhdGgiLCJtYXRjaCIsImZpbGVEYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJqb2luIiwib3MiLCJ0bXBkaXIiLCJjcnlwdG8iLCJyYW5kb21GaWxsU3luYyIsIkJ1ZmZlciIsImFsbG9jIiwidG9TdHJpbmciLCJ3cml0ZUZpbGVTeW5jIiwidGVybSIsInB0eSIsInNwYXduIiwieHRlcm0iLCJidWYiLCJyZWplY3QiLCJvbiIsInVubGluayIsImVyciIsImxvZ2dlciIsIndhcm4iLCJkYXRhIiwiZW1pdCIsImlucHV0Iiwid3JpdGUiLCJleGVjIiwic2xpY2UiLCJraWxsIl0sInNvdXJjZXMiOlsic2VydmVyL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICogYXMgcHR5IGZyb20gJ25vZGUtcHR5JztcbmltcG9ydCB7IGpvaW4sIGRpcm5hbWUsIHJlc29sdmUgYXMgcmVzb2x2ZVBhdGggfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgeHRlcm0gfSBmcm9tICcuL3NoYXJlZC94dGVybS5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9zaGFyZWQvbG9nZ2VyLmpzJztcbmNvbnN0IGV4ZWN1dGFibGUgPSByZXNvbHZlUGF0aChkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuLicsICdidWZmZXIuanMnKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihzb2NrZXQpIHtcbiAgICBjb25zdCByZW1vdGVVc2VyID0gc29ja2V0LnJlcXVlc3QuaGVhZGVyc1sncmVtb3RlLXVzZXInXTtcbiAgICBpZiAocmVtb3RlVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlbW90ZVVzZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHRlcm1QYXRoID0gJyc7XG4gICAgaWYgKGV4ZWN1dGFibGUubWF0Y2goL15cXC9zbmFwc2hvdFxcLy8pKSB7XG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gZnMucmVhZEZpbGVTeW5jKGV4ZWN1dGFibGUpO1xuICAgICAgICB0ZXJtUGF0aCA9IGpvaW4ob3MudG1wZGlyKCksIGAke2NyeXB0by5yYW5kb21GaWxsU3luYyhCdWZmZXIuYWxsb2MoMTApKS50b1N0cmluZygnaGV4Jyl9LmpzYCk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmModGVybVBhdGgsIGZpbGVEYXRhKTtcbiAgICB9XG4gICAgY29uc3QgdGVybSA9IHB0eS5zcGF3bignL3Vzci9iaW4vZW52JywgWydub2RlJywgdGVybVBhdGggfHwgZXhlY3V0YWJsZV0sIHh0ZXJtKTtcbiAgICBsZXQgYnVmID0gJyc7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGVybS5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZXJtUGF0aCkge1xuICAgICAgICAgICAgICAgIGZzLnVubGluayh0ZXJtUGF0aCwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShidWYpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGVybS5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZGF0YScsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgc29ja2V0XG4gICAgICAgICAgICAub24oJ2lucHV0JywgKGlucHV0KSA9PiB7XG4gICAgICAgICAgICB0ZXJtLndyaXRlKGlucHV0KTtcbiAgICAgICAgICAgIGJ1ZiA9IC9cXDE3Ny8uZXhlYyhpbnB1dCkgPyBidWYuc2xpY2UoMCwgLTEpIDogYnVmICsgaW5wdXQ7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0ZXJtLmtpbGwoKTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ2luLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLElBQUFDLGFBQUEsRUFBWSxJQUFBQyxhQUFBLEVBQVEsSUFBQUMsa0JBQUEsc0RBQVIsQ0FBWixFQUFxRCxJQUFyRCxFQUEyRCxXQUEzRCxDQUFuQjs7QUFDTyxTQUFTQyxLQUFULENBQWVDLE1BQWYsRUFBdUI7RUFDMUIsSUFBTUMsVUFBVSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsT0FBZixDQUF1QixhQUF2QixDQUFuQjs7RUFDQSxJQUFJRixVQUFKLEVBQWdCO0lBQ1osT0FBTyxJQUFJRyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO01BQzFCQSxPQUFPLENBQUNKLFVBQUQsQ0FBUDtJQUNILENBRk0sQ0FBUDtFQUdIOztFQUNELElBQUlLLFFBQVEsR0FBRyxFQUFmOztFQUNBLElBQUlYLFVBQVUsQ0FBQ1ksS0FBWCxDQUFpQixlQUFqQixDQUFKLEVBQXVDO0lBQ25DLElBQU1DLFFBQVEsR0FBR0MsY0FBQSxDQUFHQyxZQUFILENBQWdCZixVQUFoQixDQUFqQjs7SUFDQVcsUUFBUSxHQUFHLElBQUFLLFVBQUEsRUFBS0MsY0FBQSxDQUFHQyxNQUFILEVBQUwsWUFBcUJDLGtCQUFBLENBQU9DLGNBQVAsQ0FBc0JDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEVBQWIsQ0FBdEIsRUFBd0NDLFFBQXhDLENBQWlELEtBQWpELENBQXJCLFNBQVg7O0lBQ0FULGNBQUEsQ0FBR1UsYUFBSCxDQUFpQmIsUUFBakIsRUFBMkJFLFFBQTNCO0VBQ0g7O0VBQ0QsSUFBTVksSUFBSSxHQUFHQyxHQUFHLENBQUNDLEtBQUosQ0FBVSxjQUFWLEVBQTBCLENBQUMsTUFBRCxFQUFTaEIsUUFBUSxJQUFJWCxVQUFyQixDQUExQixFQUE0RDRCLFlBQTVELENBQWI7RUFDQSxJQUFJQyxHQUFHLEdBQUcsRUFBVjtFQUNBLE9BQU8sSUFBSXBCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVvQixNQUFWLEVBQXFCO0lBQ3BDTCxJQUFJLENBQUNNLEVBQUwsQ0FBUSxNQUFSLEVBQWdCLFlBQU07TUFDbEIsSUFBSXBCLFFBQUosRUFBYztRQUNWRyxjQUFBLENBQUdrQixNQUFILENBQVVyQixRQUFWLEVBQW9CLFVBQUFzQixHQUFHLEVBQUk7VUFDdkIsSUFBSUEsR0FBSixFQUFTO1lBQ0xDLGNBQUEsQ0FBT0MsSUFBUCxDQUFZRixHQUFaO1VBQ0g7UUFDSixDQUpEO01BS0g7O01BQ0R2QixPQUFPLENBQUNtQixHQUFELENBQVA7SUFDSCxDQVREO0lBVUFKLElBQUksQ0FBQ00sRUFBTCxDQUFRLE1BQVIsRUFBZ0IsVUFBQ0ssSUFBRCxFQUFVO01BQ3RCL0IsTUFBTSxDQUFDZ0MsSUFBUCxDQUFZLE1BQVosRUFBb0JELElBQXBCO0lBQ0gsQ0FGRDtJQUdBL0IsTUFBTSxDQUNEMEIsRUFETCxDQUNRLE9BRFIsRUFDaUIsVUFBQ08sS0FBRCxFQUFXO01BQ3hCYixJQUFJLENBQUNjLEtBQUwsQ0FBV0QsS0FBWDtNQUNBVCxHQUFHLEdBQUcsT0FBT1csSUFBUCxDQUFZRixLQUFaLElBQXFCVCxHQUFHLENBQUNZLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLENBQXJCLEdBQXdDWixHQUFHLEdBQUdTLEtBQXBEO0lBQ0gsQ0FKRCxFQUtLUCxFQUxMLENBS1EsWUFMUixFQUtzQixZQUFNO01BQ3hCTixJQUFJLENBQUNpQixJQUFMO01BQ0FaLE1BQU07SUFDVCxDQVJEO0VBU0gsQ0F2Qk0sQ0FBUDtBQXdCSCJ9
