"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xterm = void 0;

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var xterm = {
  name: 'xterm-256color',
  cols: 80,
  rows: 30,
  cwd: process.cwd(),
  env: Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(process.env).filter(function (key) {
    return !(0, _isUndefined["default"])(process.env[key]);
  }).map(function (key) {
    return _defineProperty({}, key, process.env[key]);
  }))))
};
exports.xterm = xterm;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NoYXJlZC94dGVybS5qcyIsIm5hbWVzIjpbInh0ZXJtIiwibmFtZSIsImNvbHMiLCJyb3dzIiwiY3dkIiwicHJvY2VzcyIsImVudiIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJpc1VuZGVmaW5lZCIsIm1hcCJdLCJzb3VyY2VzIjpbInNlcnZlci9zaGFyZWQveHRlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC9pc1VuZGVmaW5lZC5qcyc7XG5leHBvcnQgY29uc3QgeHRlcm0gPSB7XG4gICAgbmFtZTogJ3h0ZXJtLTI1NmNvbG9yJyxcbiAgICBjb2xzOiA4MCxcbiAgICByb3dzOiAzMCxcbiAgICBjd2Q6IHByb2Nlc3MuY3dkKCksXG4gICAgZW52OiBPYmplY3QuYXNzaWduKHt9LCAuLi5PYmplY3Qua2V5cyhwcm9jZXNzLmVudilcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiAhaXNVbmRlZmluZWQocHJvY2Vzcy5lbnZba2V5XSkpXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHsgW2tleV06IHByb2Nlc3MuZW52W2tleV0gfSkpKSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD14dGVybS5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsS0FBSyxHQUFHO0VBQ2pCQyxJQUFJLEVBQUUsZ0JBRFc7RUFFakJDLElBQUksRUFBRSxFQUZXO0VBR2pCQyxJQUFJLEVBQUUsRUFIVztFQUlqQkMsR0FBRyxFQUFFQyxPQUFPLENBQUNELEdBQVIsRUFKWTtFQUtqQkUsR0FBRyxFQUFFQyxNQUFNLENBQUNDLE1BQVAsT0FBQUQsTUFBTSxHQUFRLEVBQVIsNEJBQWVBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZSixPQUFPLENBQUNDLEdBQXBCLEVBQ3JCSSxNQURxQixDQUNkLFVBQUNDLEdBQUQ7SUFBQSxPQUFTLENBQUMsSUFBQUMsdUJBQUEsRUFBWVAsT0FBTyxDQUFDQyxHQUFSLENBQVlLLEdBQVosQ0FBWixDQUFWO0VBQUEsQ0FEYyxFQUVyQkUsR0FGcUIsQ0FFakIsVUFBQ0YsR0FBRDtJQUFBLDJCQUFhQSxHQUFiLEVBQW1CTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWixDQUFuQjtFQUFBLENBRmlCLENBQWY7QUFMTSxDQUFkIn0=
