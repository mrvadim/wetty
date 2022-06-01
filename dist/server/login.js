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

  var termPath;

  if (executable.match(/^\/snapshot\//)) {
    var fileData = _fs["default"].readFileSync(executable);

    termPath = (0, _path.join)(_os["default"].tmpdir(), "".concat(_crypto["default"].randomFillSync(Buffer.alloc(10)).toString('hex'), ".js"));

    _fs["default"].writeFileSync(termPath, fileData);
  }

  var term = pty.spawn('/usr/bin/env', ['node', termPath || executable], _xterm.xterm);

  if (termPath) {
    _fs["default"].unlink(termPath, function (err) {
      if (err) {
        _logger.logger.warn(err);
      }
    });
  }

  var buf = '';
  return new Promise(function (resolve, reject) {
    term.on('exit', function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2xvZ2luLmpzIiwibmFtZXMiOlsiZXhlY3V0YWJsZSIsInJlc29sdmVQYXRoIiwiZGlybmFtZSIsImZpbGVVUkxUb1BhdGgiLCJsb2dpbiIsInNvY2tldCIsInJlbW90ZVVzZXIiLCJyZXF1ZXN0IiwiaGVhZGVycyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGVybVBhdGgiLCJtYXRjaCIsImZpbGVEYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJqb2luIiwib3MiLCJ0bXBkaXIiLCJjcnlwdG8iLCJyYW5kb21GaWxsU3luYyIsIkJ1ZmZlciIsImFsbG9jIiwidG9TdHJpbmciLCJ3cml0ZUZpbGVTeW5jIiwidGVybSIsInB0eSIsInNwYXduIiwieHRlcm0iLCJ1bmxpbmsiLCJlcnIiLCJsb2dnZXIiLCJ3YXJuIiwiYnVmIiwicmVqZWN0Iiwib24iLCJkYXRhIiwiZW1pdCIsImlucHV0Iiwid3JpdGUiLCJleGVjIiwic2xpY2UiLCJraWxsIl0sInNvdXJjZXMiOlsic2VydmVyL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICogYXMgcHR5IGZyb20gJ25vZGUtcHR5JztcbmltcG9ydCB7IGpvaW4sIGRpcm5hbWUsIHJlc29sdmUgYXMgcmVzb2x2ZVBhdGggfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgeHRlcm0gfSBmcm9tICcuL3NoYXJlZC94dGVybS5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9zaGFyZWQvbG9nZ2VyLmpzJztcbmNvbnN0IGV4ZWN1dGFibGUgPSByZXNvbHZlUGF0aChkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuLicsICdidWZmZXIuanMnKTtcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihzb2NrZXQpIHtcbiAgICBjb25zdCByZW1vdGVVc2VyID0gc29ja2V0LnJlcXVlc3QuaGVhZGVyc1sncmVtb3RlLXVzZXInXTtcbiAgICBpZiAocmVtb3RlVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlbW90ZVVzZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHRlcm1QYXRoO1xuICAgIGlmIChleGVjdXRhYmxlLm1hdGNoKC9eXFwvc25hcHNob3RcXC8vKSkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhleGVjdXRhYmxlKTtcbiAgICAgICAgdGVybVBhdGggPSBqb2luKG9zLnRtcGRpcigpLCBgJHtjcnlwdG8ucmFuZG9tRmlsbFN5bmMoQnVmZmVyLmFsbG9jKDEwKSkudG9TdHJpbmcoJ2hleCcpfS5qc2ApO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHRlcm1QYXRoLCBmaWxlRGF0YSk7XG4gICAgfVxuICAgIGNvbnN0IHRlcm0gPSBwdHkuc3Bhd24oJy91c3IvYmluL2VudicsIFsnbm9kZScsIHRlcm1QYXRoIHx8IGV4ZWN1dGFibGVdLCB4dGVybSk7XG4gICAgaWYgKHRlcm1QYXRoKSB7XG4gICAgICAgIGZzLnVubGluayh0ZXJtUGF0aCwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGJ1ZiA9ICcnO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRlcm0ub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGJ1Zik7XG4gICAgICAgIH0pO1xuICAgICAgICB0ZXJtLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdkYXRhJywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzb2NrZXRcbiAgICAgICAgICAgIC5vbignaW5wdXQnLCAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRlcm0ud3JpdGUoaW5wdXQpO1xuICAgICAgICAgICAgYnVmID0gL1xcMTc3Ly5leGVjKGlucHV0KSA/IGJ1Zi5zbGljZSgwLCAtMSkgOiBidWYgKyBpbnB1dDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRlcm0ua2lsbCgpO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9naW4uanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsSUFBQUMsYUFBQSxFQUFZLElBQUFDLGFBQUEsRUFBUSxJQUFBQyxrQkFBQSxzREFBUixDQUFaLEVBQXFELElBQXJELEVBQTJELFdBQTNELENBQW5COztBQUNPLFNBQVNDLEtBQVQsQ0FBZUMsTUFBZixFQUF1QjtFQUMxQixJQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxPQUFmLENBQXVCLGFBQXZCLENBQW5COztFQUNBLElBQUlGLFVBQUosRUFBZ0I7SUFDWixPQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7TUFDMUJBLE9BQU8sQ0FBQ0osVUFBRCxDQUFQO0lBQ0gsQ0FGTSxDQUFQO0VBR0g7O0VBQ0QsSUFBSUssUUFBSjs7RUFDQSxJQUFJWCxVQUFVLENBQUNZLEtBQVgsQ0FBaUIsZUFBakIsQ0FBSixFQUF1QztJQUNuQyxJQUFNQyxRQUFRLEdBQUdDLGNBQUEsQ0FBR0MsWUFBSCxDQUFnQmYsVUFBaEIsQ0FBakI7O0lBQ0FXLFFBQVEsR0FBRyxJQUFBSyxVQUFBLEVBQUtDLGNBQUEsQ0FBR0MsTUFBSCxFQUFMLFlBQXFCQyxrQkFBQSxDQUFPQyxjQUFQLENBQXNCQyxNQUFNLENBQUNDLEtBQVAsQ0FBYSxFQUFiLENBQXRCLEVBQXdDQyxRQUF4QyxDQUFpRCxLQUFqRCxDQUFyQixTQUFYOztJQUNBVCxjQUFBLENBQUdVLGFBQUgsQ0FBaUJiLFFBQWpCLEVBQTJCRSxRQUEzQjtFQUNIOztFQUNELElBQU1ZLElBQUksR0FBR0MsR0FBRyxDQUFDQyxLQUFKLENBQVUsY0FBVixFQUEwQixDQUFDLE1BQUQsRUFBU2hCLFFBQVEsSUFBSVgsVUFBckIsQ0FBMUIsRUFBNEQ0QixZQUE1RCxDQUFiOztFQUNBLElBQUlqQixRQUFKLEVBQWM7SUFDVkcsY0FBQSxDQUFHZSxNQUFILENBQVVsQixRQUFWLEVBQW9CLFVBQUFtQixHQUFHLEVBQUk7TUFDdkIsSUFBSUEsR0FBSixFQUFTO1FBQ0xDLGNBQUEsQ0FBT0MsSUFBUCxDQUFZRixHQUFaO01BQ0g7SUFDSixDQUpEO0VBS0g7O0VBQ0QsSUFBSUcsR0FBRyxHQUFHLEVBQVY7RUFDQSxPQUFPLElBQUl4QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVd0IsTUFBVixFQUFxQjtJQUNwQ1QsSUFBSSxDQUFDVSxFQUFMLENBQVEsTUFBUixFQUFnQixZQUFNO01BQ2xCekIsT0FBTyxDQUFDdUIsR0FBRCxDQUFQO0lBQ0gsQ0FGRDtJQUdBUixJQUFJLENBQUNVLEVBQUwsQ0FBUSxNQUFSLEVBQWdCLFVBQUNDLElBQUQsRUFBVTtNQUN0Qi9CLE1BQU0sQ0FBQ2dDLElBQVAsQ0FBWSxNQUFaLEVBQW9CRCxJQUFwQjtJQUNILENBRkQ7SUFHQS9CLE1BQU0sQ0FDRDhCLEVBREwsQ0FDUSxPQURSLEVBQ2lCLFVBQUNHLEtBQUQsRUFBVztNQUN4QmIsSUFBSSxDQUFDYyxLQUFMLENBQVdELEtBQVg7TUFDQUwsR0FBRyxHQUFHLE9BQU9PLElBQVAsQ0FBWUYsS0FBWixJQUFxQkwsR0FBRyxDQUFDUSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFyQixHQUF3Q1IsR0FBRyxHQUFHSyxLQUFwRDtJQUNILENBSkQsRUFLS0gsRUFMTCxDQUtRLFlBTFIsRUFLc0IsWUFBTTtNQUN4QlYsSUFBSSxDQUFDaUIsSUFBTDtNQUNBUixNQUFNO0lBQ1QsQ0FSRDtFQVNILENBaEJNLENBQVA7QUFpQkgifQ==
