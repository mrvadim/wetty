"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeShell = void 0;

var escapeShell = function escapeShell(username) {
  return username.replace(/^-|[^a-zA-Z0-9_-]/g, '');
};

exports.escapeShell = escapeShell;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NoYXJlZC9zaGVsbC5qcyIsIm5hbWVzIjpbImVzY2FwZVNoZWxsIiwidXNlcm5hbWUiLCJyZXBsYWNlIl0sInNvdXJjZXMiOlsic2VydmVyL3NoYXJlZC9zaGVsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXNjYXBlU2hlbGwgPSAodXNlcm5hbWUpID0+IHVzZXJuYW1lLnJlcGxhY2UoL14tfFteYS16QS1aMC05Xy1dL2csICcnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoZWxsLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQ7RUFBQSxPQUFjQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUIsb0JBQWpCLEVBQXVDLEVBQXZDLENBQWQ7QUFBQSxDQUFwQiJ9
