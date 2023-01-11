"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spawn = spawn;

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined.js"));

var pty = _interopRequireWildcard(require("node-pty"));

var _os = _interopRequireDefault(require("os"));

var _logger = require("../shared/logger.js");

var _xterm = require("./shared/xterm.js");

var _env = require("./spawn/env.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function spawn(_x, _x2, _x3) {
  return _spawn.apply(this, arguments);
}

function _spawn() {
  _spawn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(socket, args, cb) {
    var cmd, term, pid, address;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _os["default"].platform() === 'darwin';

            if (_context.t0) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return (0, _env.envVersion)();

          case 4:
            _context.t1 = _context.sent;
            _context.t0 = _context.t1 >= 9;

          case 6:
            if (!_context.t0) {
              _context.next = 10;
              break;
            }

            _context.t2 = ['-S'].concat(_toConsumableArray(args));
            _context.next = 11;
            break;

          case 10:
            _context.t2 = args;

          case 11:
            cmd = _context.t2;

            _logger.logger.debug('Spawning PTTY', {
              cmd: cmd
            });

            term = pty.spawn('/usr/bin/env', cmd, _xterm.xterm);
            pid = term.pid;
            address = args[0] === 'ssh' ? args[1] : 'localhost';

            _logger.logger.info('Process Started on behalf of user', {
              pid: pid,
              address: address
            });

            socket.emit('login');
            term.on('exit', function (code) {
              _logger.logger.info('Process exited', {
                code: code,
                pid: pid
              });

              socket.emit('logout');
              socket.removeAllListeners('disconnect').removeAllListeners('resize').removeAllListeners('input');
            });
            term.on('data', function (data) {
              if (cb) cb(data, args);
              socket.emit('data', data);
            });
            socket.on('resize', function (_ref) {
              var cols = _ref.cols,
                  rows = _ref.rows;
              term.resize(cols, rows);
            }).on('input', function (input) {
              if (!(0, _isUndefined["default"])(term)) term.write(input);
            }).on('disconnect', function () {
              term.kill();

              _logger.logger.info('Process exited', {
                code: 0,
                pid: pid
              });
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _spawn.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NwYXduLmpzIiwibmFtZXMiOlsic3Bhd24iLCJzb2NrZXQiLCJhcmdzIiwiY2IiLCJvcyIsInBsYXRmb3JtIiwiZW52VmVyc2lvbiIsImNtZCIsImxvZ2dlciIsImRlYnVnIiwidGVybSIsInB0eSIsInh0ZXJtIiwicGlkIiwiYWRkcmVzcyIsImluZm8iLCJlbWl0Iiwib24iLCJjb2RlIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZGF0YSIsImNvbHMiLCJyb3dzIiwicmVzaXplIiwiaW5wdXQiLCJpc1VuZGVmaW5lZCIsIndyaXRlIiwia2lsbCJdLCJzb3VyY2VzIjpbInNlcnZlci9zcGF3bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2lzVW5kZWZpbmVkLmpzJztcbmltcG9ydCAqIGFzIHB0eSBmcm9tICdub2RlLXB0eSc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB4dGVybSB9IGZyb20gJy4vc2hhcmVkL3h0ZXJtLmpzJztcbmltcG9ydCB7IGVudlZlcnNpb24gfSBmcm9tICcuL3NwYXduL2Vudi5qcyc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3Bhd24oc29ja2V0LCBhcmdzLCBjYikge1xuICAgIGNvbnN0IGNtZCA9IG9zLnBsYXRmb3JtKCkgPT09ICdkYXJ3aW4nIHx8IChhd2FpdCBlbnZWZXJzaW9uKCkpID49IDkgPyBbJy1TJywgLi4uYXJnc10gOiBhcmdzO1xuICAgIGxvZ2dlci5kZWJ1ZygnU3Bhd25pbmcgUFRUWScsIHsgY21kIH0pO1xuICAgIGNvbnN0IHRlcm0gPSBwdHkuc3Bhd24oJy91c3IvYmluL2VudicsIGNtZCwgeHRlcm0pO1xuICAgIGNvbnN0IHsgcGlkIH0gPSB0ZXJtO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBhcmdzWzBdID09PSAnc3NoJyA/IGFyZ3NbMV0gOiAnbG9jYWxob3N0JztcbiAgICBsb2dnZXIuaW5mbygnUHJvY2VzcyBTdGFydGVkIG9uIGJlaGFsZiBvZiB1c2VyJywge1xuICAgICAgICBwaWQsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgfSk7XG4gICAgc29ja2V0LmVtaXQoJ2xvZ2luJyk7XG4gICAgdGVybS5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdQcm9jZXNzIGV4aXRlZCcsIHsgY29kZSwgcGlkIH0pO1xuICAgICAgICBzb2NrZXQuZW1pdCgnbG9nb3V0Jyk7XG4gICAgICAgIHNvY2tldFxuICAgICAgICAgICAgLnJlbW92ZUFsbExpc3RlbmVycygnZGlzY29ubmVjdCcpXG4gICAgICAgICAgICAucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZXNpemUnKVxuICAgICAgICAgICAgLnJlbW92ZUFsbExpc3RlbmVycygnaW5wdXQnKTtcbiAgICB9KTtcbiAgICB0ZXJtLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGNiKVxuICAgICAgICAgICAgY2IoZGF0YSwgYXJncyk7XG4gICAgICAgIHNvY2tldC5lbWl0KCdkYXRhJywgZGF0YSk7XG4gICAgfSk7XG4gICAgc29ja2V0XG4gICAgICAgIC5vbigncmVzaXplJywgKHsgY29scywgcm93cyB9KSA9PiB7XG4gICAgICAgIHRlcm0ucmVzaXplKGNvbHMsIHJvd3MpO1xuICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCBpbnB1dCA9PiB7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQodGVybSkpXG4gICAgICAgICAgICB0ZXJtLndyaXRlKGlucHV0KTtcbiAgICB9KVxuICAgICAgICAub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgIHRlcm0ua2lsbCgpO1xuICAgICAgICBsb2dnZXIuaW5mbygnUHJvY2VzcyBleGl0ZWQnLCB7IGNvZGU6IDAsIHBpZCB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYXduLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7OytDQUpBLG9KOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FLc0JBLEs7Ozs7O3NFQUFmLGlCQUFxQkMsTUFBckIsRUFBNkJDLElBQTdCLEVBQW1DQyxFQUFuQztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQSxjQUNTQyxjQUFBLENBQUdDLFFBQUgsT0FBa0IsUUFEM0I7O1lBQUE7Y0FBQTtjQUFBO1lBQUE7O1lBQUE7WUFBQSxPQUM4QyxJQUFBQyxlQUFBLEdBRDlDOztVQUFBO1lBQUE7WUFBQSw2QkFDK0QsQ0FEL0Q7O1VBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTs7WUFBQSxlQUNvRSxJQURwRSw0QkFDNkVKLElBRDdFO1lBQUE7WUFBQTs7VUFBQTtZQUFBLGNBQ3FGQSxJQURyRjs7VUFBQTtZQUNHSyxHQURIOztZQUVIQyxjQUFBLENBQU9DLEtBQVAsQ0FBYSxlQUFiLEVBQThCO2NBQUVGLEdBQUcsRUFBSEE7WUFBRixDQUE5Qjs7WUFDTUcsSUFISCxHQUdVQyxHQUFHLENBQUNYLEtBQUosQ0FBVSxjQUFWLEVBQTBCTyxHQUExQixFQUErQkssWUFBL0IsQ0FIVjtZQUlLQyxHQUpMLEdBSWFILElBSmIsQ0FJS0csR0FKTDtZQUtHQyxPQUxILEdBS2FaLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxLQUFaLEdBQW9CQSxJQUFJLENBQUMsQ0FBRCxDQUF4QixHQUE4QixXQUwzQzs7WUFNSE0sY0FBQSxDQUFPTyxJQUFQLENBQVksbUNBQVosRUFBaUQ7Y0FDN0NGLEdBQUcsRUFBSEEsR0FENkM7Y0FFN0NDLE9BQU8sRUFBUEE7WUFGNkMsQ0FBakQ7O1lBSUFiLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZLE9BQVo7WUFDQU4sSUFBSSxDQUFDTyxFQUFMLENBQVEsTUFBUixFQUFnQixVQUFDQyxJQUFELEVBQVU7Y0FDdEJWLGNBQUEsQ0FBT08sSUFBUCxDQUFZLGdCQUFaLEVBQThCO2dCQUFFRyxJQUFJLEVBQUpBLElBQUY7Z0JBQVFMLEdBQUcsRUFBSEE7Y0FBUixDQUE5Qjs7Y0FDQVosTUFBTSxDQUFDZSxJQUFQLENBQVksUUFBWjtjQUNBZixNQUFNLENBQ0RrQixrQkFETCxDQUN3QixZQUR4QixFQUVLQSxrQkFGTCxDQUV3QixRQUZ4QixFQUdLQSxrQkFITCxDQUd3QixPQUh4QjtZQUlILENBUEQ7WUFRQVQsSUFBSSxDQUFDTyxFQUFMLENBQVEsTUFBUixFQUFnQixVQUFDRyxJQUFELEVBQVU7Y0FDdEIsSUFBSWpCLEVBQUosRUFDSUEsRUFBRSxDQUFDaUIsSUFBRCxFQUFPbEIsSUFBUCxDQUFGO2NBQ0pELE1BQU0sQ0FBQ2UsSUFBUCxDQUFZLE1BQVosRUFBb0JJLElBQXBCO1lBQ0gsQ0FKRDtZQUtBbkIsTUFBTSxDQUNEZ0IsRUFETCxDQUNRLFFBRFIsRUFDa0IsZ0JBQW9CO2NBQUEsSUFBakJJLElBQWlCLFFBQWpCQSxJQUFpQjtjQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztjQUNsQ1osSUFBSSxDQUFDYSxNQUFMLENBQVlGLElBQVosRUFBa0JDLElBQWxCO1lBQ0gsQ0FIRCxFQUlLTCxFQUpMLENBSVEsT0FKUixFQUlpQixVQUFBTyxLQUFLLEVBQUk7Y0FDdEIsSUFBSSxDQUFDLElBQUFDLHVCQUFBLEVBQVlmLElBQVosQ0FBTCxFQUNJQSxJQUFJLENBQUNnQixLQUFMLENBQVdGLEtBQVg7WUFDUCxDQVBELEVBUUtQLEVBUkwsQ0FRUSxZQVJSLEVBUXNCLFlBQU07Y0FDeEJQLElBQUksQ0FBQ2lCLElBQUw7O2NBQ0FuQixjQUFBLENBQU9PLElBQVAsQ0FBWSxnQkFBWixFQUE4QjtnQkFBRUcsSUFBSSxFQUFFLENBQVI7Z0JBQVdMLEdBQUcsRUFBSEE7Y0FBWCxDQUE5QjtZQUNILENBWEQ7O1VBeEJHO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLEMifQ==
