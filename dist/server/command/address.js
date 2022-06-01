"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.address = address;

var _shell = require("../shared/shell.js");

function address(headers, user, host) {
  var remoteUser = headers['remote-user'];

  if (remoteUser) {
    return "".concat((0, _shell.escapeShell)(remoteUser), "@").concat(host);
  }

  var match = headers.referer.match(/.+\/ssh\/([^/]+)$/);

  if (match) {
    var username = (0, _shell.escapeShell)(match[1].split('?')[0]);
    return "".concat(username, "@").concat(host);
  }

  return user ? "".concat((0, _shell.escapeShell)(user), "@").concat(host) : host;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL2NvbW1hbmQvYWRkcmVzcy5qcyIsIm5hbWVzIjpbImFkZHJlc3MiLCJoZWFkZXJzIiwidXNlciIsImhvc3QiLCJyZW1vdGVVc2VyIiwiZXNjYXBlU2hlbGwiLCJtYXRjaCIsInJlZmVyZXIiLCJ1c2VybmFtZSIsInNwbGl0Il0sInNvdXJjZXMiOlsic2VydmVyL2NvbW1hbmQvYWRkcmVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlc2NhcGVTaGVsbCB9IGZyb20gJy4uL3NoYXJlZC9zaGVsbC5qcyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkcmVzcyhoZWFkZXJzLCB1c2VyLCBob3N0KSB7XG4gICAgY29uc3QgcmVtb3RlVXNlciA9IGhlYWRlcnNbJ3JlbW90ZS11c2VyJ107XG4gICAgaWYgKHJlbW90ZVVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGAke2VzY2FwZVNoZWxsKHJlbW90ZVVzZXIpfUAke2hvc3R9YDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2ggPSBoZWFkZXJzLnJlZmVyZXIubWF0Y2goLy4rXFwvc3NoXFwvKFteL10rKSQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlc2NhcGVTaGVsbChtYXRjaFsxXS5zcGxpdCgnPycpWzBdKTtcbiAgICAgICAgcmV0dXJuIGAke3VzZXJuYW1lfUAke2hvc3R9YDtcbiAgICB9XG4gICAgcmV0dXJuIHVzZXIgPyBgJHtlc2NhcGVTaGVsbCh1c2VyKX1AJHtob3N0fWAgOiBob3N0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkcmVzcy5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDO0VBQ3pDLElBQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBMUI7O0VBQ0EsSUFBSUcsVUFBSixFQUFnQjtJQUNaLGlCQUFVLElBQUFDLGtCQUFBLEVBQVlELFVBQVosQ0FBVixjQUFxQ0QsSUFBckM7RUFDSDs7RUFDRCxJQUFNRyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkQsS0FBaEIsQ0FBc0IsbUJBQXRCLENBQWQ7O0VBQ0EsSUFBSUEsS0FBSixFQUFXO0lBQ1AsSUFBTUUsUUFBUSxHQUFHLElBQUFILGtCQUFBLEVBQVlDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBWixDQUFqQjtJQUNBLGlCQUFVRCxRQUFWLGNBQXNCTCxJQUF0QjtFQUNIOztFQUNELE9BQU9ELElBQUksYUFBTSxJQUFBRyxrQkFBQSxFQUFZSCxJQUFaLENBQU4sY0FBMkJDLElBQTNCLElBQW9DQSxJQUEvQztBQUNIIn0=
