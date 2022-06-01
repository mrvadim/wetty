"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined.js"));

var _logger = require("../../shared/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listen = function listen(app, host, port, path, _ref) {
  var key = _ref.key,
      cert = _ref.cert;
  return (0, _socket["default"])(!(0, _isUndefined["default"])(key) && !(0, _isUndefined["default"])(cert) ? _https["default"].createServer({
    key: key,
    cert: cert
  }, app).listen(port, host, function () {
    _logger.logger.info('Server started', {
      port: port,
      connection: 'https'
    });
  }) : _http["default"].createServer(app).listen(port, host, function () {
    _logger.logger.info('Server started', {
      port: port,
      connection: 'http'
    });
  }), {
    path: "".concat(path, "/socket.io"),
    pingInterval: 3000,
    pingTimeout: 7000
  });
};

exports.listen = listen;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9zb2NrZXQuanMiLCJuYW1lcyI6WyJsaXN0ZW4iLCJhcHAiLCJob3N0IiwicG9ydCIsInBhdGgiLCJrZXkiLCJjZXJ0Iiwic29ja2V0IiwiaXNVbmRlZmluZWQiLCJodHRwcyIsImNyZWF0ZVNlcnZlciIsImxvZ2dlciIsImluZm8iLCJjb25uZWN0aW9uIiwiaHR0cCIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0Il0sInNvdXJjZXMiOlsic2VydmVyL3NvY2tldFNlcnZlci9zb2NrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvY2tldCBmcm9tICdzb2NrZXQuaW8nO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC9pc1VuZGVmaW5lZC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9nZ2VyLmpzJztcbmV4cG9ydCBjb25zdCBsaXN0ZW4gPSAoYXBwLCBob3N0LCBwb3J0LCBwYXRoLCB7IGtleSwgY2VydCB9KSA9PiBzb2NrZXQoIWlzVW5kZWZpbmVkKGtleSkgJiYgIWlzVW5kZWZpbmVkKGNlcnQpXG4gICAgPyBodHRwcy5jcmVhdGVTZXJ2ZXIoeyBrZXksIGNlcnQgfSwgYXBwKS5saXN0ZW4ocG9ydCwgaG9zdCwgKCkgPT4ge1xuICAgICAgICBsb2dnZXIuaW5mbygnU2VydmVyIHN0YXJ0ZWQnLCB7XG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgY29ubmVjdGlvbjogJ2h0dHBzJyxcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICA6IGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsIGhvc3QsICgpID0+IHtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1NlcnZlciBzdGFydGVkJywge1xuICAgICAgICAgICAgcG9ydCxcbiAgICAgICAgICAgIGNvbm5lY3Rpb246ICdodHRwJyxcbiAgICAgICAgfSk7XG4gICAgfSksIHtcbiAgICBwYXRoOiBgJHtwYXRofS9zb2NrZXQuaW9gLFxuICAgIHBpbmdJbnRlcnZhbDogMzAwMCxcbiAgICBwaW5nVGltZW91dDogNzAwMCxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c29ja2V0LmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLElBQVosRUFBa0JDLElBQWxCO0VBQUEsSUFBMEJDLEdBQTFCLFFBQTBCQSxHQUExQjtFQUFBLElBQStCQyxJQUEvQixRQUErQkEsSUFBL0I7RUFBQSxPQUEwQyxJQUFBQyxrQkFBQSxFQUFPLENBQUMsSUFBQUMsdUJBQUEsRUFBWUgsR0FBWixDQUFELElBQXFCLENBQUMsSUFBQUcsdUJBQUEsRUFBWUYsSUFBWixDQUF0QixHQUNqRUcsaUJBQUEsQ0FBTUMsWUFBTixDQUFtQjtJQUFFTCxHQUFHLEVBQUhBLEdBQUY7SUFBT0MsSUFBSSxFQUFKQTtFQUFQLENBQW5CLEVBQWtDTCxHQUFsQyxFQUF1Q0QsTUFBdkMsQ0FBOENHLElBQTlDLEVBQW9ERCxJQUFwRCxFQUEwRCxZQUFNO0lBQzlEUyxjQUFBLENBQU9DLElBQVAsQ0FBWSxnQkFBWixFQUE4QjtNQUMxQlQsSUFBSSxFQUFKQSxJQUQwQjtNQUUxQlUsVUFBVSxFQUFFO0lBRmMsQ0FBOUI7RUFJSCxDQUxDLENBRGlFLEdBT2pFQyxnQkFBQSxDQUFLSixZQUFMLENBQWtCVCxHQUFsQixFQUF1QkQsTUFBdkIsQ0FBOEJHLElBQTlCLEVBQW9DRCxJQUFwQyxFQUEwQyxZQUFNO0lBQzlDUyxjQUFBLENBQU9DLElBQVAsQ0FBWSxnQkFBWixFQUE4QjtNQUMxQlQsSUFBSSxFQUFKQSxJQUQwQjtNQUUxQlUsVUFBVSxFQUFFO0lBRmMsQ0FBOUI7RUFJSCxDQUxDLENBUDBELEVBWXhEO0lBQ0pULElBQUksWUFBS0EsSUFBTCxlQURBO0lBRUpXLFlBQVksRUFBRSxJQUZWO0lBR0pDLFdBQVcsRUFBRTtFQUhULENBWndELENBQTFDO0FBQUEsQ0FBZiJ9
