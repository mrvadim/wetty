"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.serveStatic = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = require("./shared/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trim = function trim(str) {
  return str.replace(/\/*$/, '');
};

exports.trim = trim;

var serveStatic = function serveStatic(path) {
  return _express["default"]["static"]((0, _path.assetsPath)(path));
};

exports.serveStatic = serveStatic;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9hc3NldHMuanMiLCJuYW1lcyI6WyJ0cmltIiwic3RyIiwicmVwbGFjZSIsInNlcnZlU3RhdGljIiwicGF0aCIsImV4cHJlc3MiLCJhc3NldHNQYXRoIl0sInNvdXJjZXMiOlsic2VydmVyL3NvY2tldFNlcnZlci9hc3NldHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBhc3NldHNQYXRoIH0gZnJvbSAnLi9zaGFyZWQvcGF0aC5qcyc7XG5leHBvcnQgY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC9cXC8qJC8sICcnKTtcbmV4cG9ydCBjb25zdCBzZXJ2ZVN0YXRpYyA9IChwYXRoKSA9PiBleHByZXNzLnN0YXRpYyhhc3NldHNQYXRoKHBhdGgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzc2V0cy5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEdBQUQ7RUFBQSxPQUFTQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLENBQVQ7QUFBQSxDQUFiOzs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRDtFQUFBLE9BQVVDLG1CQUFBLFdBQWUsSUFBQUMsZ0JBQUEsRUFBV0YsSUFBWCxDQUFmLENBQVY7QUFBQSxDQUFwQiJ9
