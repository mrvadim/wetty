"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.policies = void 0;

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var policies = function policies(allowIframe) {
  return function (req, res, next) {
    var args = {
      referrerPolicy: {
        policy: ['no-referrer-when-downgrade']
      },
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          fontSrc: ["'self'", 'data:'],
          connectSrc: ["'self'", (req.protocol === 'http' ? 'ws://' : 'wss://') + req.get('host')]
        }
      }
    };
    if (!allowIframe) args.frameguard = {
      action: 'sameorigin'
    };
    (0, _helmet["default"])(args)(req, res, next);
  };
};

exports.policies = policies;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NvY2tldFNlcnZlci9zZWN1cml0eS5qcyIsIm5hbWVzIjpbInBvbGljaWVzIiwiYWxsb3dJZnJhbWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXJncyIsInJlZmVycmVyUG9saWN5IiwicG9saWN5IiwiY29udGVudFNlY3VyaXR5UG9saWN5IiwiZGlyZWN0aXZlcyIsImRlZmF1bHRTcmMiLCJzY3JpcHRTcmMiLCJzdHlsZVNyYyIsImZvbnRTcmMiLCJjb25uZWN0U3JjIiwicHJvdG9jb2wiLCJnZXQiLCJmcmFtZWd1YXJkIiwiYWN0aW9uIiwiaGVsbWV0Il0sInNvdXJjZXMiOlsic2VydmVyL3NvY2tldFNlcnZlci9zZWN1cml0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5leHBvcnQgY29uc3QgcG9saWNpZXMgPSAoYWxsb3dJZnJhbWUpID0+IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSB7XG4gICAgICAgIHJlZmVycmVyUG9saWN5OiB7IHBvbGljeTogWyduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSddIH0sXG4gICAgICAgIGNvbnRlbnRTZWN1cml0eVBvbGljeToge1xuICAgICAgICAgICAgZGlyZWN0aXZlczoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRTcmM6IFtcIidzZWxmJ1wiXSxcbiAgICAgICAgICAgICAgICBzY3JpcHRTcmM6IFtcIidzZWxmJ1wiLCBcIid1bnNhZmUtaW5saW5lJ1wiLCBcIid1bnNhZmUtZXZhbCdcIl0sXG4gICAgICAgICAgICAgICAgc3R5bGVTcmM6IFtcIidzZWxmJ1wiLCBcIid1bnNhZmUtaW5saW5lJ1wiXSxcbiAgICAgICAgICAgICAgICBmb250U3JjOiBbXCInc2VsZidcIiwgJ2RhdGE6J10sXG4gICAgICAgICAgICAgICAgY29ubmVjdFNyYzogW1xuICAgICAgICAgICAgICAgICAgICBcIidzZWxmJ1wiLFxuICAgICAgICAgICAgICAgICAgICAocmVxLnByb3RvY29sID09PSAnaHR0cCcgPyAnd3M6Ly8nIDogJ3dzczovLycpICsgcmVxLmdldCgnaG9zdCcpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKCFhbGxvd0lmcmFtZSlcbiAgICAgICAgYXJncy5mcmFtZWd1YXJkID0geyBhY3Rpb246ICdzYW1lb3JpZ2luJyB9O1xuICAgIGhlbG1ldChhcmdzKShyZXEsIHJlcywgbmV4dCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VjdXJpdHkuanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxXQUFEO0VBQUEsT0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7SUFDekQsSUFBTUMsSUFBSSxHQUFHO01BQ1RDLGNBQWMsRUFBRTtRQUFFQyxNQUFNLEVBQUUsQ0FBQyw0QkFBRDtNQUFWLENBRFA7TUFFVEMscUJBQXFCLEVBQUU7UUFDbkJDLFVBQVUsRUFBRTtVQUNSQyxVQUFVLEVBQUUsQ0FBQyxRQUFELENBREo7VUFFUkMsU0FBUyxFQUFFLENBQUMsUUFBRCxFQUFXLGlCQUFYLEVBQThCLGVBQTlCLENBRkg7VUFHUkMsUUFBUSxFQUFFLENBQUMsUUFBRCxFQUFXLGlCQUFYLENBSEY7VUFJUkMsT0FBTyxFQUFFLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FKRDtVQUtSQyxVQUFVLEVBQUUsQ0FDUixRQURRLEVBRVIsQ0FBQ1osR0FBRyxDQUFDYSxRQUFKLEtBQWlCLE1BQWpCLEdBQTBCLE9BQTFCLEdBQW9DLFFBQXJDLElBQWlEYixHQUFHLENBQUNjLEdBQUosQ0FBUSxNQUFSLENBRnpDO1FBTEo7TUFETztJQUZkLENBQWI7SUFlQSxJQUFJLENBQUNmLFdBQUwsRUFDSUksSUFBSSxDQUFDWSxVQUFMLEdBQWtCO01BQUVDLE1BQU0sRUFBRTtJQUFWLENBQWxCO0lBQ0osSUFBQUMsa0JBQUEsRUFBT2QsSUFBUCxFQUFhSCxHQUFiLEVBQWtCQyxHQUFsQixFQUF1QkMsSUFBdkI7RUFDSCxDQW5CdUI7QUFBQSxDQUFqQiJ9
