"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _env = require("./env.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _winston$format = _winston["default"].format,
    combine = _winston$format.combine,
    timestamp = _winston$format.timestamp,
    label = _winston$format.label,
    simple = _winston$format.simple,
    json = _winston$format.json,
    colorize = _winston$format.colorize;
var dev = combine(colorize(), label({
  label: 'Wetty'
}), timestamp(), simple());
var prod = combine(label({
  label: 'Wetty'
}), timestamp(), json());

var logger = _winston["default"].createLogger({
  format: _env.isDev ? dev : prod,
  transports: [new _winston["default"].transports.Console({
    level: _env.isDev ? 'debug' : 'warn',
    handleExceptions: true
  })]
});

exports.logger = logger;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkL2xvZ2dlci5qcyIsIm5hbWVzIjpbIndpbnN0b24iLCJmb3JtYXQiLCJjb21iaW5lIiwidGltZXN0YW1wIiwibGFiZWwiLCJzaW1wbGUiLCJqc29uIiwiY29sb3JpemUiLCJkZXYiLCJwcm9kIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwiaXNEZXYiLCJ0cmFuc3BvcnRzIiwiQ29uc29sZSIsImxldmVsIiwiaGFuZGxlRXhjZXB0aW9ucyJdLCJzb3VyY2VzIjpbInNoYXJlZC9sb2dnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBpc0RldiB9IGZyb20gJy4vZW52LmpzJztcbmNvbnN0IHsgY29tYmluZSwgdGltZXN0YW1wLCBsYWJlbCwgc2ltcGxlLCBqc29uLCBjb2xvcml6ZSB9ID0gd2luc3Rvbi5mb3JtYXQ7XG5jb25zdCBkZXYgPSBjb21iaW5lKGNvbG9yaXplKCksIGxhYmVsKHsgbGFiZWw6ICdXZXR0eScgfSksIHRpbWVzdGFtcCgpLCBzaW1wbGUoKSk7XG5jb25zdCBwcm9kID0gY29tYmluZShsYWJlbCh7IGxhYmVsOiAnV2V0dHknIH0pLCB0aW1lc3RhbXAoKSwganNvbigpKTtcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gICAgZm9ybWF0OiBpc0RldiA/IGRldiA6IHByb2QsXG4gICAgdHJhbnNwb3J0czogW1xuICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgICAgICAgbGV2ZWw6IGlzRGV2ID8gJ2RlYnVnJyA6ICd3YXJuJyxcbiAgICAgICAgICAgIGhhbmRsZUV4Y2VwdGlvbnM6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIF0sXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ2dlci5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBLHNCQUE4REEsbUJBQUEsQ0FBUUMsTUFBdEU7QUFBQSxJQUFRQyxPQUFSLG1CQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFNBQWpCLG1CQUFpQkEsU0FBakI7QUFBQSxJQUE0QkMsS0FBNUIsbUJBQTRCQSxLQUE1QjtBQUFBLElBQW1DQyxNQUFuQyxtQkFBbUNBLE1BQW5DO0FBQUEsSUFBMkNDLElBQTNDLG1CQUEyQ0EsSUFBM0M7QUFBQSxJQUFpREMsUUFBakQsbUJBQWlEQSxRQUFqRDtBQUNBLElBQU1DLEdBQUcsR0FBR04sT0FBTyxDQUFDSyxRQUFRLEVBQVQsRUFBYUgsS0FBSyxDQUFDO0VBQUVBLEtBQUssRUFBRTtBQUFULENBQUQsQ0FBbEIsRUFBd0NELFNBQVMsRUFBakQsRUFBcURFLE1BQU0sRUFBM0QsQ0FBbkI7QUFDQSxJQUFNSSxJQUFJLEdBQUdQLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDO0VBQUVBLEtBQUssRUFBRTtBQUFULENBQUQsQ0FBTixFQUE0QkQsU0FBUyxFQUFyQyxFQUF5Q0csSUFBSSxFQUE3QyxDQUFwQjs7QUFDTyxJQUFNSSxNQUFNLEdBQUdWLG1CQUFBLENBQVFXLFlBQVIsQ0FBcUI7RUFDdkNWLE1BQU0sRUFBRVcsVUFBQSxHQUFRSixHQUFSLEdBQWNDLElBRGlCO0VBRXZDSSxVQUFVLEVBQUUsQ0FDUixJQUFJYixtQkFBQSxDQUFRYSxVQUFSLENBQW1CQyxPQUF2QixDQUErQjtJQUMzQkMsS0FBSyxFQUFFSCxVQUFBLEdBQVEsT0FBUixHQUFrQixNQURFO0lBRTNCSSxnQkFBZ0IsRUFBRTtFQUZTLENBQS9CLENBRFE7QUFGMkIsQ0FBckIsQ0FBZiJ9
