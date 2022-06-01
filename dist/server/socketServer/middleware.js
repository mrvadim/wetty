"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.favicon = favicon;
exports.redirect = redirect;

var _etag = _interopRequireDefault(require("etag"));

var _fresh = _interopRequireDefault(require("fresh"));

var _parseurl = _interopRequireDefault(require("parseurl"));

var _fs = _interopRequireDefault(require("fs"));

var _path = require("./shared/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ONE_YEAR_MS = 60 * 60 * 24 * 365 * 1000;

var isFresh = function isFresh(req, res) {
  return (0, _fresh["default"])(req.headers, {
    etag: res.getHeader('ETag'),
    'last-modified': res.getHeader('Last-Modified')
  });
};

function redirect(req, res, next) {
  if (req.path.substr(-1) === '/' && req.path.length > 1) res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));else next();
}

function favicon(basePath) {
  var path = (0, _path.assetsPath)('assets', 'favicon.ico');
  return function (req, res, next) {
    if (getPathName(req) !== "".concat(basePath, "/favicon.ico")) {
      next();
      return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.statusCode = req.method === 'OPTIONS' ? 200 : 405;
      res.setHeader('Allow', 'GET, HEAD, OPTIONS');
      res.setHeader('Content-Length', '0');
      res.end();
      return;
    }

    _fs["default"].readFile(path, function (err, buf) {
      if (err) return next(err);
      Object.entries({
        'Cache-Control': "public, max-age=".concat(Math.floor(ONE_YEAR_MS / 1000)),
        ETag: (0, _etag["default"])(buf)
      }).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        res.setHeader(key, value);
      });

      if (isFresh(req, res)) {
        res.statusCode = 304;
        return res.end();
      }

      res.statusCode = 200;
      res.setHeader('Content-Length', buf.length);
      res.setHeader('Content-Type', 'image/x-icon');
      return res.end(buf);
    });
  };
}

function getPathName(req) {
  try {
    var url = (0, _parseurl["default"])(req);
    return (url === null || url === void 0 ? void 0 : url.pathname) ? url.pathname : undefined;
  } catch (e) {
    return undefined;
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9taWRkbGV3YXJlLmpzIiwibmFtZXMiOlsiT05FX1lFQVJfTVMiLCJpc0ZyZXNoIiwicmVxIiwicmVzIiwiZnJlc2giLCJoZWFkZXJzIiwiZXRhZyIsImdldEhlYWRlciIsInJlZGlyZWN0IiwibmV4dCIsInBhdGgiLCJzdWJzdHIiLCJsZW5ndGgiLCJzbGljZSIsInVybCIsImZhdmljb24iLCJiYXNlUGF0aCIsImFzc2V0c1BhdGgiLCJnZXRQYXRoTmFtZSIsIm1ldGhvZCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJmcyIsInJlYWRGaWxlIiwiZXJyIiwiYnVmIiwiT2JqZWN0IiwiZW50cmllcyIsIk1hdGgiLCJmbG9vciIsIkVUYWciLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJwYXJzZVVybCIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwiZSJdLCJzb3VyY2VzIjpbInNlcnZlci9zb2NrZXRTZXJ2ZXIvbWlkZGxld2FyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXRhZyBmcm9tICdldGFnJztcbmltcG9ydCBmcmVzaCBmcm9tICdmcmVzaCc7XG5pbXBvcnQgcGFyc2VVcmwgZnJvbSAncGFyc2V1cmwnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGFzc2V0c1BhdGggfSBmcm9tICcuL3NoYXJlZC9wYXRoLmpzJztcbmNvbnN0IE9ORV9ZRUFSX01TID0gNjAgKiA2MCAqIDI0ICogMzY1ICogMTAwMDtcbmNvbnN0IGlzRnJlc2ggPSAocmVxLCByZXMpID0+IGZyZXNoKHJlcS5oZWFkZXJzLCB7XG4gICAgZXRhZzogcmVzLmdldEhlYWRlcignRVRhZycpLFxuICAgICdsYXN0LW1vZGlmaWVkJzogcmVzLmdldEhlYWRlcignTGFzdC1Nb2RpZmllZCcpLFxufSk7XG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAocmVxLnBhdGguc3Vic3RyKC0xKSA9PT0gJy8nICYmIHJlcS5wYXRoLmxlbmd0aCA+IDEpXG4gICAgICAgIHJlcy5yZWRpcmVjdCgzMDEsIHJlcS5wYXRoLnNsaWNlKDAsIC0xKSArIHJlcS51cmwuc2xpY2UocmVxLnBhdGgubGVuZ3RoKSk7XG4gICAgZWxzZVxuICAgICAgICBuZXh0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmF2aWNvbihiYXNlUGF0aCkge1xuICAgIGNvbnN0IHBhdGggPSBhc3NldHNQYXRoKCdhc3NldHMnLCAnZmF2aWNvbi5pY28nKTtcbiAgICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChnZXRQYXRoTmFtZShyZXEpICE9PSBgJHtiYXNlUGF0aH0vZmF2aWNvbi5pY29gKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnICYmIHJlcS5tZXRob2QgIT09ICdIRUFEJykge1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXEubWV0aG9kID09PSAnT1BUSU9OUycgPyAyMDAgOiA0MDU7XG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdHRVQsIEhFQUQsIE9QVElPTlMnKTtcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJywgJzAnKTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmcy5yZWFkRmlsZShwYXRoLCAoZXJyLCBidWYpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHtcbiAgICAgICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6IGBwdWJsaWMsIG1heC1hZ2U9JHtNYXRoLmZsb29yKE9ORV9ZRUFSX01TIC8gMTAwMCl9YCxcbiAgICAgICAgICAgICAgICBFVGFnOiBldGFnKGJ1ZiksXG4gICAgICAgICAgICB9KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaXNGcmVzaChyZXEsIHJlcykpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDMwNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LUxlbmd0aCcsIGJ1Zi5sZW5ndGgpO1xuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2ltYWdlL3gtaWNvbicpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoYnVmKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhdGhOYW1lKHJlcSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHBhcnNlVXJsKHJlcSk7XG4gICAgICAgIHJldHVybiAodXJsID09PSBudWxsIHx8IHVybCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXJsLnBhdGhuYW1lKSA/IHVybC5wYXRobmFtZSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWRkbGV3YXJlLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFdBQVcsR0FBRyxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsR0FBZixHQUFxQixJQUF6Qzs7QUFDQSxJQUFN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
