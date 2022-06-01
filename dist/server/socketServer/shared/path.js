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

  return _path.resolve.apply(void 0, [filePath, 'build'].concat(args));
};

exports.assetsPath = assetsPath;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9zaGFyZWQvcGF0aC5qcyIsIm5hbWVzIjpbImZpbGVQYXRoIiwiZGlybmFtZSIsImZpbmRVcCIsInN5bmMiLCJjd2QiLCJmaWxlVVJMVG9QYXRoIiwicHJvY2VzcyIsImFzc2V0c1BhdGgiLCJhcmdzIiwicmVzb2x2ZSJdLCJzb3VyY2VzIjpbInNlcnZlci9zb2NrZXRTZXJ2ZXIvc2hhcmVkL3BhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRVcCBmcm9tICdmaW5kLXVwJztcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuY29uc3QgZmlsZVBhdGggPSBkaXJuYW1lKGZpbmRVcC5zeW5jKCdwYWNrYWdlLmpzb24nLCB7XG4gICAgY3dkOiBkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksXG59KSB8fCBwcm9jZXNzLmN3ZCgpKTtcbmV4cG9ydCBjb25zdCBhc3NldHNQYXRoID0gKC4uLmFyZ3MpID0+IHJlc29sdmUoZmlsZVBhdGgsICdidWlsZCcsIC4uLmFyZ3MpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBLElBQU1BLFFBQVEsR0FBRyxJQUFBQyxhQUFBLEVBQVFDLGtCQUFBLENBQU9DLElBQVAsQ0FBWSxjQUFaLEVBQTRCO0VBQ2pEQyxHQUFHLEVBQUUsSUFBQUgsYUFBQSxFQUFRLElBQUFJLGtCQUFBLHNEQUFSO0FBRDRDLENBQTVCLEtBRW5CQyxPQUFPLENBQUNGLEdBQVIsRUFGVyxDQUFqQjs7QUFHTyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtFQUFBLGtDQUFJQyxJQUFKO0lBQUlBLElBQUo7RUFBQTs7RUFBQSxPQUFhQyxhQUFBLGdCQUFRVCxRQUFSLEVBQWtCLE9BQWxCLFNBQThCUSxJQUE5QixFQUFiO0FBQUEsQ0FBbkIifQ==
