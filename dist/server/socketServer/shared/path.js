"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetsPath = void 0;

var _findUp = _interopRequireDefault(require("find-up"));

var _path = require("path");

var _url = require("url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filePath = (0, _path.dirname)(_findUp["default"].sync('package.json', {
  cwd: (0, _path.dirname)((0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString()))
}) || process.cwd());

var assetsPath = function assetsPath() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _path.resolve.apply(void 0, [filePath, 'dist'].concat(args));
};

exports.assetsPath = assetsPath;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9zaGFyZWQvcGF0aC5qcyIsIm5hbWVzIjpbImZpbGVQYXRoIiwiZGlybmFtZSIsImZpbmRVcCIsInN5bmMiLCJjd2QiLCJmaWxlVVJMVG9QYXRoIiwicHJvY2VzcyIsImFzc2V0c1BhdGgiLCJhcmdzIiwicmVzb2x2ZSJdLCJzb3VyY2VzIjpbInNlcnZlci9zb2NrZXRTZXJ2ZXIvc2hhcmVkL3BhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRVcCBmcm9tICdmaW5kLXVwJztcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuY29uc3QgZmlsZVBhdGggPSBkaXJuYW1lKGZpbmRVcC5zeW5jKCdwYWNrYWdlLmpzb24nLCB7XG4gICAgY3dkOiBkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksXG59KSB8fCBwcm9jZXNzLmN3ZCgpKTtcbmV4cG9ydCBjb25zdCBhc3NldHNQYXRoID0gKC4uLmFyZ3MpID0+IHJlc29sdmUoZmlsZVBhdGgsICdkaXN0JywgLi4uYXJncyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLElBQUFDLGFBQUEsRUFBUUMsa0JBQUEsQ0FBT0MsSUFBUCxDQUFZLGNBQVosRUFBNEI7RUFDakRDLEdBQUcsRUFBRSxJQUFBSCxhQUFBLEVBQVEsSUFBQUksa0JBQUEsc0RBQVI7QUFENEMsQ0FBNUIsS0FFbkJDLE9BQU8sQ0FBQ0YsR0FBUixFQUZXLENBQWpCOztBQUdPLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0VBQUEsa0NBQUlDLElBQUo7SUFBSUEsSUFBSjtFQUFBOztFQUFBLE9BQWFDLGFBQUEsZ0JBQVFULFFBQVIsRUFBa0IsTUFBbEIsU0FBNkJRLElBQTdCLEVBQWI7QUFBQSxDQUFuQiJ9
