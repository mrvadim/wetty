"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadConfigFile = loadConfigFile;
exports.mergeCliConf = mergeCliConf;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _json = _interopRequireDefault(require("json5"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined.js"));

var _defaults = require("./defaults.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ensureBoolean(value) {
  switch (value) {
    case true:
    case 'true':
    case 1:
    case '1':
    case 'on':
    case 'yes':
      return true;

    default:
      return false;
  }
}

function loadConfigFile(_x) {
  return _loadConfigFile.apply(this, arguments);
}

function _loadConfigFile() {
  _loadConfigFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(filepath) {
    var content, parsed;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _isUndefined["default"])(filepath)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {
              ssh: _defaults.sshDefault,
              server: _defaults.serverDefault,
              command: _defaults.defaultCommand,
              forceSSH: _defaults.forceSSHDefault
            });

          case 2:
            _context.next = 4;
            return _fsExtra["default"].readFile(_path["default"].resolve(filepath));

          case 4:
            content = _context.sent;
            parsed = _json["default"].parse(content.toString());
            return _context.abrupt("return", {
              ssh: (0, _isUndefined["default"])(parsed.ssh) ? _defaults.sshDefault : Object.assign(_defaults.sshDefault, parsed.ssh),
              server: (0, _isUndefined["default"])(parsed.server) ? _defaults.serverDefault : Object.assign(_defaults.serverDefault, parsed.server),
              command: (0, _isUndefined["default"])(parsed.command) ? _defaults.defaultCommand : "".concat(parsed.command),
              forceSSH: (0, _isUndefined["default"])(parsed.forceSSH) ? _defaults.forceSSHDefault : ensureBoolean(parsed.forceSSH),
              ssl: parsed.ssl
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadConfigFile.apply(this, arguments);
}

var objectAssign = function objectAssign(target, source) {
  return Object.fromEntries(Object.entries(source).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, (0, _isUndefined["default"])(source[key]) ? target[key] : value];
  }));
};

function mergeCliConf(opts, config) {
  var ssl = _objectSpread({
    key: opts['ssl-key'],
    cert: opts['ssl-cert']
  }, config.ssl);

  return {
    ssh: objectAssign(config.ssh, {
      user: opts['ssh-user'],
      host: opts['ssh-host'],
      auth: opts['ssh-auth'],
      port: opts['ssh-port'],
      pass: opts['ssh-pass'],
      key: opts['ssh-key'],
      allowRemoteHosts: opts['allow-remote-hosts'],
      config: opts['ssh-config'],
      knownHosts: opts['known-hosts']
    }),
    server: objectAssign(config.server, {
      base: opts.base,
      host: opts.host,
      port: opts.port,
      title: opts.title,
      allowIframe: opts['allow-iframe']
    }),
    command: (0, _isUndefined["default"])(opts.command) ? config.command : "".concat(opts.command),
    forceSSH: (0, _isUndefined["default"])(opts['force-ssh']) ? config.forceSSH : ensureBoolean(opts['force-ssh']),
    ssl: (0, _isUndefined["default"])(ssl.key) || (0, _isUndefined["default"])(ssl.cert) ? undefined : ssl
  };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkL2NvbmZpZy5qcyIsIm5hbWVzIjpbImVuc3VyZUJvb2xlYW4iLCJ2YWx1ZSIsImxvYWRDb25maWdGaWxlIiwiZmlsZXBhdGgiLCJpc1VuZGVmaW5lZCIsInNzaCIsInNzaERlZmF1bHQiLCJzZXJ2ZXIiLCJzZXJ2ZXJEZWZhdWx0IiwiY29tbWFuZCIsImRlZmF1bHRDb21tYW5kIiwiZm9yY2VTU0giLCJmb3JjZVNTSERlZmF1bHQiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJjb250ZW50IiwicGFyc2VkIiwiSlNPTjUiLCJwYXJzZSIsInRvU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic3NsIiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwibWVyZ2VDbGlDb25mIiwib3B0cyIsImNvbmZpZyIsImNlcnQiLCJ1c2VyIiwiaG9zdCIsImF1dGgiLCJwb3J0IiwicGFzcyIsImFsbG93UmVtb3RlSG9zdHMiLCJrbm93bkhvc3RzIiwiYmFzZSIsInRpdGxlIiwiYWxsb3dJZnJhbWUiLCJ1bmRlZmluZWQiXSwic291cmNlcyI6WyJzaGFyZWQvY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBKU09ONSBmcm9tICdqc29uNSc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2lzVW5kZWZpbmVkLmpzJztcbmltcG9ydCB7IHNzaERlZmF1bHQsIHNlcnZlckRlZmF1bHQsIGZvcmNlU1NIRGVmYXVsdCwgZGVmYXVsdENvbW1hbmQsIH0gZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5mdW5jdGlvbiBlbnN1cmVCb29sZWFuKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgJzEnOlxuICAgICAgICBjYXNlICdvbic6XG4gICAgICAgIGNhc2UgJ3llcyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZ0ZpbGUoZmlsZXBhdGgpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoZmlsZXBhdGgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzc2g6IHNzaERlZmF1bHQsXG4gICAgICAgICAgICBzZXJ2ZXI6IHNlcnZlckRlZmF1bHQsXG4gICAgICAgICAgICBjb21tYW5kOiBkZWZhdWx0Q29tbWFuZCxcbiAgICAgICAgICAgIGZvcmNlU1NIOiBmb3JjZVNTSERlZmF1bHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoZmlsZXBhdGgpKTtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09ONS5wYXJzZShjb250ZW50LnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNzaDogaXNVbmRlZmluZWQocGFyc2VkLnNzaClcbiAgICAgICAgICAgID8gc3NoRGVmYXVsdFxuICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHNzaERlZmF1bHQsIHBhcnNlZC5zc2gpLFxuICAgICAgICBzZXJ2ZXI6IGlzVW5kZWZpbmVkKHBhcnNlZC5zZXJ2ZXIpXG4gICAgICAgICAgICA/IHNlcnZlckRlZmF1bHRcbiAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbihzZXJ2ZXJEZWZhdWx0LCBwYXJzZWQuc2VydmVyKSxcbiAgICAgICAgY29tbWFuZDogaXNVbmRlZmluZWQocGFyc2VkLmNvbW1hbmQpID8gZGVmYXVsdENvbW1hbmQgOiBgJHtwYXJzZWQuY29tbWFuZH1gLFxuICAgICAgICBmb3JjZVNTSDogaXNVbmRlZmluZWQocGFyc2VkLmZvcmNlU1NIKVxuICAgICAgICAgICAgPyBmb3JjZVNTSERlZmF1bHRcbiAgICAgICAgICAgIDogZW5zdXJlQm9vbGVhbihwYXJzZWQuZm9yY2VTU0gpLFxuICAgICAgICBzc2w6IHBhcnNlZC5zc2wsXG4gICAgfTtcbn1cbmNvbnN0IG9iamVjdEFzc2lnbiA9ICh0YXJnZXQsIHNvdXJjZSkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHNvdXJjZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtcbiAgICBrZXksXG4gICAgaXNVbmRlZmluZWQoc291cmNlW2tleV0pID8gdGFyZ2V0W2tleV0gOiB2YWx1ZSxcbl0pKTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNsaUNvbmYob3B0cywgY29uZmlnKSB7XG4gICAgY29uc3Qgc3NsID0ge1xuICAgICAgICBrZXk6IG9wdHNbJ3NzbC1rZXknXSxcbiAgICAgICAgY2VydDogb3B0c1snc3NsLWNlcnQnXSxcbiAgICAgICAgLi4uY29uZmlnLnNzbCxcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHNzaDogb2JqZWN0QXNzaWduKGNvbmZpZy5zc2gsIHtcbiAgICAgICAgICAgIHVzZXI6IG9wdHNbJ3NzaC11c2VyJ10sXG4gICAgICAgICAgICBob3N0OiBvcHRzWydzc2gtaG9zdCddLFxuICAgICAgICAgICAgYXV0aDogb3B0c1snc3NoLWF1dGgnXSxcbiAgICAgICAgICAgIHBvcnQ6IG9wdHNbJ3NzaC1wb3J0J10sXG4gICAgICAgICAgICBwYXNzOiBvcHRzWydzc2gtcGFzcyddLFxuICAgICAgICAgICAga2V5OiBvcHRzWydzc2gta2V5J10sXG4gICAgICAgICAgICBhbGxvd1JlbW90ZUhvc3RzOiBvcHRzWydhbGxvdy1yZW1vdGUtaG9zdHMnXSxcbiAgICAgICAgICAgIGNvbmZpZzogb3B0c1snc3NoLWNvbmZpZyddLFxuICAgICAgICAgICAga25vd25Ib3N0czogb3B0c1sna25vd24taG9zdHMnXSxcbiAgICAgICAgfSksXG4gICAgICAgIHNlcnZlcjogb2JqZWN0QXNzaWduKGNvbmZpZy5zZXJ2ZXIsIHtcbiAgICAgICAgICAgIGJhc2U6IG9wdHMuYmFzZSxcbiAgICAgICAgICAgIGhvc3Q6IG9wdHMuaG9zdCxcbiAgICAgICAgICAgIHBvcnQ6IG9wdHMucG9ydCxcbiAgICAgICAgICAgIHRpdGxlOiBvcHRzLnRpdGxlLFxuICAgICAgICAgICAgYWxsb3dJZnJhbWU6IG9wdHNbJ2FsbG93LWlmcmFtZSddLFxuICAgICAgICB9KSxcbiAgICAgICAgY29tbWFuZDogaXNVbmRlZmluZWQob3B0cy5jb21tYW5kKSA/IGNvbmZpZy5jb21tYW5kIDogYCR7b3B0cy5jb21tYW5kfWAsXG4gICAgICAgIGZvcmNlU1NIOiBpc1VuZGVmaW5lZChvcHRzWydmb3JjZS1zc2gnXSlcbiAgICAgICAgICAgID8gY29uZmlnLmZvcmNlU1NIXG4gICAgICAgICAgICA6IGVuc3VyZUJvb2xlYW4ob3B0c1snZm9yY2Utc3NoJ10pLFxuICAgICAgICBzc2w6IGlzVW5kZWZpbmVkKHNzbC5rZXkpIHx8IGlzVW5kZWZpbmVkKHNzbC5jZXJ0KSA/IHVuZGVmaW5lZCA6IHNzbCxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7OytDQUhBLG9KOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtFQUMxQixRQUFRQSxLQUFSO0lBQ0ksS0FBSyxJQUFMO0lBQ0EsS0FBSyxNQUFMO0lBQ0EsS0FBSyxDQUFMO0lBQ0EsS0FBSyxHQUFMO0lBQ0EsS0FBSyxJQUFMO0lBQ0EsS0FBSyxLQUFMO01BQ0ksT0FBTyxJQUFQOztJQUNKO01BQ0ksT0FBTyxLQUFQO0VBVFI7QUFXSDs7U0FDcUJDLGM7Ozs7OytFQUFmLGlCQUE4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
