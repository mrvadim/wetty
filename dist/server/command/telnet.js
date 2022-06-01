"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.telnetOptions = telnetOptions;

function telnetOptions(_ref, user) {
  var host = _ref.host,
      port = _ref.port;
  var telnet = ['telnet'];

  if (user) {
    telnet.push.apply(telnet, ['-l', user]);
  }

  telnet.push.apply(telnet, [host, port]);
  return telnet;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2NvbW1hbmQvdGVsbmV0LmpzIiwibmFtZXMiOlsidGVsbmV0T3B0aW9ucyIsInVzZXIiLCJob3N0IiwicG9ydCIsInRlbG5ldCIsInB1c2giXSwic291cmNlcyI6WyJzZXJ2ZXIvY29tbWFuZC90ZWxuZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRlbG5ldE9wdGlvbnMoeyBob3N0LCBwb3J0IH0sIHVzZXIpIHtcbiAgICBjb25zdCB0ZWxuZXQgPSBbJ3RlbG5ldCddO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRlbG5ldC5wdXNoKC4uLlsnLWwnLCB1c2VyXSk7XG4gICAgfVxuICAgIHRlbG5ldC5wdXNoKC4uLltob3N0LCBwb3J0XSk7XG4gICAgcmV0dXJuIHRlbG5ldDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbG5ldC5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxhQUFULE9BQXVDQyxJQUF2QyxFQUE2QztFQUFBLElBQXBCQyxJQUFvQixRQUFwQkEsSUFBb0I7RUFBQSxJQUFkQyxJQUFjLFFBQWRBLElBQWM7RUFDaEQsSUFBTUMsTUFBTSxHQUFHLENBQUMsUUFBRCxDQUFmOztFQUNBLElBQUlILElBQUosRUFBVTtJQUNORyxNQUFNLENBQUNDLElBQVAsT0FBQUQsTUFBTSxFQUFTLENBQUMsSUFBRCxFQUFPSCxJQUFQLENBQVQsQ0FBTjtFQUNIOztFQUNERyxNQUFNLENBQUNDLElBQVAsT0FBQUQsTUFBTSxFQUFTLENBQUNGLElBQUQsRUFBT0MsSUFBUCxDQUFULENBQU47RUFDQSxPQUFPQyxNQUFQO0FBQ0gifQ==
