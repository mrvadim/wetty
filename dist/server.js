"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _command = require("./server/command.js");

var _logger = require("./shared/logger.js");

var _login = require("./server/login.js");

var _socketServer = require("./server/socketServer.js");

var _spawn = require("./server/spawn.js");

var _defaults = require("./shared/defaults.js");

var _shell = require("./server/shared/shell.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var ssh,
        serverConf,
        command,
        forcessh,
        ssl,
        cb,
        io,
        _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ssh = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _defaults.sshDefault;
            serverConf = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _defaults.serverDefault;
            command = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : _defaults.defaultCommand;
            forcessh = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : _defaults.forceSSHDefault;
            ssl = _args2.length > 4 ? _args2[4] : undefined;
            cb = _args2.length > 5 ? _args2[5] : undefined;

            if (ssh.key) {
              _logger.logger.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n! Password-less auth enabled using private key from ".concat(ssh.key, ".\n! This is dangerous, anything that reaches the wetty server\n! will be able to run remote operations without authentication.\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
            }

            _context2.next = 9;
            return (0, _socketServer.server)(serverConf, ssl);

          case 9:
            io = _context2.sent;
            io.on('connection', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(socket) {
                var _getCommand, _getCommand2, args, sshUser, isTelnet, username;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _logger.logger.info('Connection accepted.');

                        _getCommand = (0, _command.getCommand)(socket, ssh, command, forcessh), _getCommand2 = _slicedToArray(_getCommand, 3), args = _getCommand2[0], sshUser = _getCommand2[1], isTelnet = _getCommand2[2];

                        _logger.logger.debug('Command Generated', {
                          user: sshUser,
                          cmd: args.join(' ')
                        });

                        _context.prev = 3;

                        if (!(!sshUser && !isTelnet)) {
                          _context.next = 10;
                          break;
                        }

                        _context.next = 7;
                        return (0, _login.login)(socket);

                      case 7:
                        username = _context.sent;
                        args[1] = "".concat((0, _shell.escapeShell)(username.trim()), "@").concat(args[1]);

                        _logger.logger.debug('Spawning term', {
                          username: username.trim(),
                          cmd: args.join(' ')
                        });

                      case 10:
                        _context.next = 12;
                        return (0, _spawn.spawn)(socket, args, cb);

                      case 12:
                        _context.next = 17;
                        break;

                      case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](3);

                        _logger.logger.info('Disconnect signal sent', {
                          err: _context.t0
                        });

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[3, 14]]);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", io);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _start.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibmFtZXMiOlsic3RhcnQiLCJzc2giLCJzc2hEZWZhdWx0Iiwic2VydmVyQ29uZiIsInNlcnZlckRlZmF1bHQiLCJjb21tYW5kIiwiZGVmYXVsdENvbW1hbmQiLCJmb3JjZXNzaCIsImZvcmNlU1NIRGVmYXVsdCIsInNzbCIsImNiIiwia2V5IiwibG9nZ2VyIiwid2FybiIsInNlcnZlciIsImlvIiwib24iLCJzb2NrZXQiLCJpbmZvIiwiZ2V0Q29tbWFuZCIsImFyZ3MiLCJzc2hVc2VyIiwiaXNUZWxuZXQiLCJkZWJ1ZyIsInVzZXIiLCJjbWQiLCJqb2luIiwibG9naW4iLCJ1c2VybmFtZSIsImVzY2FwZVNoZWxsIiwidHJpbSIsInNwYXduIiwiZXJyIl0sInNvdXJjZXMiOlsic2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbW1hbmQgfSBmcm9tICcuL3NlcnZlci9jb21tYW5kLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vc2hhcmVkL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4vc2VydmVyL2xvZ2luLmpzJztcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4vc2VydmVyL3NvY2tldFNlcnZlci5qcyc7XG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJy4vc2VydmVyL3NwYXduLmpzJztcbmltcG9ydCB7IHNzaERlZmF1bHQsIHNlcnZlckRlZmF1bHQsIGZvcmNlU1NIRGVmYXVsdCwgZGVmYXVsdENvbW1hbmQsIH0gZnJvbSAnLi9zaGFyZWQvZGVmYXVsdHMuanMnO1xuaW1wb3J0IHsgZXNjYXBlU2hlbGwgfSBmcm9tICcuL3NlcnZlci9zaGFyZWQvc2hlbGwuanMnO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KHNzaCA9IHNzaERlZmF1bHQsIHNlcnZlckNvbmYgPSBzZXJ2ZXJEZWZhdWx0LCBjb21tYW5kID0gZGVmYXVsdENvbW1hbmQsIGZvcmNlc3NoID0gZm9yY2VTU0hEZWZhdWx0LCBzc2wsIGNiKSB7XG4gICAgaWYgKHNzaC5rZXkpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oYCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuISBQYXNzd29yZC1sZXNzIGF1dGggZW5hYmxlZCB1c2luZyBwcml2YXRlIGtleSBmcm9tICR7c3NoLmtleX0uXG4hIFRoaXMgaXMgZGFuZ2Vyb3VzLCBhbnl0aGluZyB0aGF0IHJlYWNoZXMgdGhlIHdldHR5IHNlcnZlclxuISB3aWxsIGJlIGFibGUgdG8gcnVuIHJlbW90ZSBvcGVyYXRpb25zIHdpdGhvdXQgYXV0aGVudGljYXRpb24uXG4hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhYCk7XG4gICAgfVxuICAgIGNvbnN0IGlvID0gYXdhaXQgc2VydmVyKHNlcnZlckNvbmYsIHNzbCk7XG4gICAgaW8ub24oJ2Nvbm5lY3Rpb24nLCBhc3luYyAoc29ja2V0KSA9PiB7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdDb25uZWN0aW9uIGFjY2VwdGVkLicpO1xuICAgICAgICBjb25zdCBbYXJncywgc3NoVXNlciwgaXNUZWxuZXRdID0gZ2V0Q29tbWFuZChzb2NrZXQsIHNzaCwgY29tbWFuZCwgZm9yY2Vzc2gpO1xuICAgICAgICBsb2dnZXIuZGVidWcoJ0NvbW1hbmQgR2VuZXJhdGVkJywge1xuICAgICAgICAgICAgdXNlcjogc3NoVXNlcixcbiAgICAgICAgICAgIGNtZDogYXJncy5qb2luKCcgJyksXG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFzc2hVc2VyICYmICFpc1RlbG5ldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYXdhaXQgbG9naW4oc29ja2V0KTtcbiAgICAgICAgICAgICAgICBhcmdzWzFdID0gYCR7ZXNjYXBlU2hlbGwodXNlcm5hbWUudHJpbSgpKX1AJHthcmdzWzFdfWA7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTcGF3bmluZyB0ZXJtJywge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBjbWQ6IGFyZ3Muam9pbignICcpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgc3Bhd24oc29ja2V0LCBhcmdzLCBjYik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnRGlzY29ubmVjdCBzaWduYWwgc2VudCcsIHsgZXJyOiBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcnZlci5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzsrQ0FMQSxvSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBTXNCQSxLOzs7OztzRUFBZjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFxQkMsR0FBckIsOERBQTJCQyxvQkFBM0I7WUFBdUNDLFVBQXZDLDhEQUFvREMsdUJBQXBEO1lBQW1FQyxPQUFuRSw4REFBNkVDLHdCQUE3RTtZQUE2RkMsUUFBN0YsOERBQXdHQyx5QkFBeEc7WUFBeUhDLEdBQXpIO1lBQThIQyxFQUE5SDs7WUFDSCxJQUFJVCxHQUFHLENBQUNVLEdBQVIsRUFBYTtjQUNUQyxjQUFBLENBQU9DLElBQVAsc0lBQzhDWixHQUFHLENBQUNVLEdBRGxEO1lBS0g7O1lBUEU7WUFBQSxPQVFjLElBQUFHLG9CQUFBLEVBQU9YLFVBQVAsRUFBbUJNLEdBQW5CLENBUmQ7O1VBQUE7WUFRR00sRUFSSDtZQVNIQSxFQUFFLENBQUNDLEVBQUgsQ0FBTSxZQUFOO2NBQUEsc0VBQW9CLGlCQUFPQyxNQUFQO2dCQUFBOztnQkFBQTtrQkFBQTtvQkFBQTtzQkFBQTt3QkFDaEJMLGNBQUEsQ0FBT00sSUFBUCxDQUFZLHNCQUFaOzt3QkFEZ0IsY0FFa0IsSUFBQUMsbUJBQUEsRUFBV0YsTUFBWCxFQUFtQmhCLEdBQW5CLEVBQXdCSSxPQUF4QixFQUFpQ0UsUUFBakMsQ0FGbEIsaURBRVRhLElBRlMsb0JBRUhDLE9BRkcsb0JBRU1DLFFBRk47O3dCQUdoQlYsY0FBQSxDQUFPVyxLQUFQLENBQWEsbUJBQWIsRUFBa0M7MEJBQzlCQyxJQUFJLEVBQUVILE9BRHdCOzBCQUU5QkksR0FBRyxFQUFFTCxJQUFJLENBQUNNLElBQUwsQ0FBVSxHQUFWO3dCQUZ5QixDQUFsQzs7d0JBSGdCOzt3QkFBQSxNQVFSLENBQUNMLE9BQUQsSUFBWSxDQUFDQyxRQVJMOzBCQUFBOzBCQUFBO3dCQUFBOzt3QkFBQTt3QkFBQSxPQVNlLElBQUFLLFlBQUEsRUFBTVYsTUFBTixDQVRmOztzQkFBQTt3QkFTRlcsUUFURTt3QkFVUlIsSUFBSSxDQUFDLENBQUQsQ0FBSixhQUFhLElBQUFTLGtCQUFBLEVBQVlELFFBQVEsQ0FBQ0UsSUFBVCxFQUFaLENBQWIsY0FBNkNWLElBQUksQ0FBQyxDQUFELENBQWpEOzt3QkFDQVIsY0FBQSxDQUFPVyxLQUFQLENBQWEsZUFBYixFQUE4QjswQkFDMUJLLFFBQVEsRUFBRUEsUUFBUSxDQUFDRSxJQUFULEVBRGdCOzBCQUUxQkwsR0FBRyxFQUFFTCxJQUFJLENBQUNNLElBQUwsQ0FBVSxHQUFWO3dCQUZxQixDQUE5Qjs7c0JBWFE7d0JBQUE7d0JBQUEsT0FnQk4sSUFBQUssWUFBQSxFQUFNZCxNQUFOLEVBQWNHLElBQWQsRUFBb0JWLEVBQXBCLENBaEJNOztzQkFBQTt3QkFBQTt3QkFBQTs7c0JBQUE7d0JBQUE7d0JBQUE7O3dCQW1CWkUsY0FBQSxDQUFPTSxJQUFQLENBQVksd0JBQVosRUFBc0M7MEJBQUVjLEdBQUc7d0JBQUwsQ0FBdEM7O3NCQW5CWTtzQkFBQTt3QkFBQTtvQkFBQTtrQkFBQTtnQkFBQTtjQUFBLENBQXBCOztjQUFBO2dCQUFBO2NBQUE7WUFBQTtZQVRHLGtDQStCSWpCLEVBL0JKOztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLEMifQ==
