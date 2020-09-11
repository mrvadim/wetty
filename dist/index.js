module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/cli/index.ts":
/*!*********************************!*\
  !*** ./src/server/cli/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ "yargs");
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/server/utils/index.ts");
/* harmony import */ var _wetty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wetty */ "./src/server/wetty/index.ts");
/* harmony import */ var _parseArgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseArgs */ "./src/server/cli/parseArgs.ts");
function init(opts){if(!opts.help){const{ssh,server,command,forcessh,ssl}=Object(_parseArgs__WEBPACK_IMPORTED_MODULE_3__["unWrapArgs"])(opts);Object(_wetty__WEBPACK_IMPORTED_MODULE_2__["default"])(ssh,server,command,forcessh,ssl).catch(err=>{_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error(err);process.exitCode=1;});}else{yargs__WEBPACK_IMPORTED_MODULE_0__["showHelp"]();process.exitCode=0;}}

/***/ }),

/***/ "./src/server/cli/parseArgs.ts":
/*!*************************************!*\
  !*** ./src/server/cli/parseArgs.ts ***!
  \*************************************/
/*! exports provided: unWrapArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unWrapArgs", function() { return unWrapArgs; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
function unWrapArgs(args){return{ssh:{user:args.sshuser,host:args.sshhost,auth:args.sshauth,port:args.sshport,pass:args.sshpass,key:args.sshkey,knownhosts:args.knownhosts},server:{base:args.base,host:args.host,port:args.port,title:args.title,bypasshelmet:args.bypasshelmet||false},command:args.command,forcessh:args.forcessh,ssl:lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(args.sslkey)||lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(args.sslcert)?undefined:{key:args.sslkey,cert:args.sslcert}};}

/***/ }),

/***/ "./src/server/command/address.ts":
/*!***************************************!*\
  !*** ./src/server/command/address.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return address; });
function address(referer,user,host){const match=referer.match('.+/ssh/([^/]+)$');const fallback=user?`${user}@${host}`:host;return match?`${match[1].split('?')[0]}@${host}`:fallback;}

/***/ }),

/***/ "./src/server/command/index.ts":
/*!*************************************!*\
  !*** ./src/server/command/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address */ "./src/server/command/address.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/server/command/login.ts");
/* harmony import */ var _ssh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ssh */ "./src/server/command/ssh.ts");
const localhost=host=>process.getuid()===0&&(host==='localhost'||host==='0.0.0.0'||host==='127.0.0.1');const urlArgs=(referer,def)=>Object.assign(def,url__WEBPACK_IMPORTED_MODULE_0__["parse"](referer,true).query);/* harmony default export */ __webpack_exports__["default"] = (({request:{headers:{referer}},client:{conn:{remoteAddress}}},{user,host,port,auth,pass,key,knownhosts},command,forcessh)=>({args:!forcessh&&localhost(host)?Object(_login__WEBPACK_IMPORTED_MODULE_2__["default"])(command,remoteAddress):Object(_ssh__WEBPACK_IMPORTED_MODULE_3__["default"])({...urlArgs(referer,{port:`${port}`,pass:pass||'',command,auth,knownhosts}),host:Object(_address__WEBPACK_IMPORTED_MODULE_1__["default"])(referer,user,host)},key),user:!forcessh&&localhost(host)||user!==''||user.includes('@')||Object(_address__WEBPACK_IMPORTED_MODULE_1__["default"])(referer,user,host).includes('@')}));

/***/ }),

/***/ "./src/server/command/login.ts":
/*!*************************************!*\
  !*** ./src/server/command/login.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginOptions; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
const getRemoteAddress=remoteAddress=>lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(remoteAddress.split(':')[3])?'localhost':remoteAddress.split(':')[3];function loginOptions(command,remoteAddress){return command==='login'?[command,'-h',getRemoteAddress(remoteAddress)]:[command];}

/***/ }),

/***/ "./src/server/command/parse.ts":
/*!*************************************!*\
  !*** ./src/server/command/parse.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseCommand; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
function parseCommand(command,path){if(command==='login'&&lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(path))return'';return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(path)?`$SHELL -c "cd ${path};${command==='login'?'$SHELL':command}"`:command;}

/***/ }),

/***/ "./src/server/command/ssh.ts":
/*!***********************************!*\
  !*** ./src/server/command/ssh.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sshOptions; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./src/server/command/parse.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/logger */ "./src/server/utils/logger.ts");
function sshOptions({pass,path,command,host,port,auth,knownhosts},key){const cmd=Object(_parse__WEBPACK_IMPORTED_MODULE_1__["default"])(command,path);const hostChecking=knownhosts!=='/dev/null'?'yes':'no';const sshRemoteOptsBase=['ssh',host,'-t','-p',port,'-o',`PreferredAuthentications=${auth}`,'-o',`UserKnownHostsFile=${knownhosts}`,'-o',`StrictHostKeyChecking=${hostChecking}`];_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`Authentication Type: ${auth}`);if(!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(key)){return sshRemoteOptsBase.concat(['-i',key,cmd]);}if(pass!==''){return['sshpass','-p',pass].concat(sshRemoteOptsBase,[cmd]);}if(auth==='none'){sshRemoteOptsBase.splice(sshRemoteOptsBase.indexOf('-o'),2);}if(cmd===''){return sshRemoteOptsBase;}return sshRemoteOptsBase.concat([cmd]);}

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wetty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wetty */ "./src/server/wetty/index.ts");
/* harmony import */ var _cli__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cli */ "./src/server/cli/index.ts");
/* harmony default export */ __webpack_exports__["default"] = ({start:_wetty__WEBPACK_IMPORTED_MODULE_0__["default"],init: _cli__WEBPACK_IMPORTED_MODULE_1__["default"]});

/***/ }),

/***/ "./src/server/socketServer/html.ts":
/*!*****************************************!*\
  !*** ./src/server/socketServer/html.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((base,title)=>(req,res)=>{const resourcePath=/^\/ssh\//.test(req.url.replace(base,'/'))?'../':base;res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>${title}</title>
    <link rel="stylesheet" href="${resourcePath}public/index.css" />
  </head>
  <body>
    <div id="overlay">
      <div class="error">
        <div id="msg"></div>
        <input type="button" onclick="location.reload();" value="reconnect" />
      </div>
    </div>
    <div id="options">
      <a class="toggler"
         href="#"
         alt="Toggle options"><i class="fas fa-cogs"></i></a>
      <textarea class="editor"></textarea>
    </div>
    <div id="terminal"></div>
    <script src="${resourcePath}public/index.js"></script>
  </body>
</html>`);});

/***/ }),

/***/ "./src/server/socketServer/index.ts":
/*!******************************************!*\
  !*** ./src/server/socketServer/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createServer; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serve-favicon */ "serve-favicon");
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express_winston__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! express-winston */ "express-winston");
/* harmony import */ var express_winston__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express_winston__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html */ "./src/server/socketServer/html.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/logger */ "./src/server/utils/logger.ts");
const distDir=path__WEBPACK_IMPORTED_MODULE_7__["join"](__dirname,'client');const trim=str=>str.replace(/\/*$/,'');function createServer({base,port,host,title,bypasshelmet},{key,cert}){const basePath=trim(base);_utils_logger__WEBPACK_IMPORTED_MODULE_11__["default"].info('Starting server',{key,cert,port,base,title});const app=express__WEBPACK_IMPORTED_MODULE_2__();app.use(express_winston__WEBPACK_IMPORTED_MODULE_9__["logger"](_utils_logger__WEBPACK_IMPORTED_MODULE_11__["default"])).use(compression__WEBPACK_IMPORTED_MODULE_1__()).use(serve_favicon__WEBPACK_IMPORTED_MODULE_3__(path__WEBPACK_IMPORTED_MODULE_7__["join"](distDir,'favicon.ico'))).use(`${basePath}/public`,express__WEBPACK_IMPORTED_MODULE_2__["static"](distDir)).use((req,res,next)=>{if(req.path.substr(-1)==='/'&&req.path.length>1)res.redirect(301,req.path.slice(0,-1)+req.url.slice(req.path.length));else next();});// Allow helmet to be bypassed.
// Unfortunately, order matters with middleware
// which is why this is thrown in the middle
if(!bypasshelmet){app.use(helmet__WEBPACK_IMPORTED_MODULE_4__());}const client=Object(_html__WEBPACK_IMPORTED_MODULE_10__["default"])(base,title);app.get(basePath,client).get(`${basePath}/ssh/:user?`,client);return socket_io__WEBPACK_IMPORTED_MODULE_8__(!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(key)&&!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(cert)?https__WEBPACK_IMPORTED_MODULE_6__["createServer"]({key,cert},app).listen(port,host,()=>{_utils_logger__WEBPACK_IMPORTED_MODULE_11__["default"].info('Server started',{port,connection:'https'});}):http__WEBPACK_IMPORTED_MODULE_5__["createServer"](app).listen(port,host,()=>{_utils_logger__WEBPACK_IMPORTED_MODULE_11__["default"].info('Server started',{port,connection:'http'});}),{path:`${basePath}/socket.io`,pingInterval:3000,pingTimeout:7000});}

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/*! exports provided: logger, loadSSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/server/utils/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ssl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssl */ "./src/server/utils/ssl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSSL", function() { return _ssl__WEBPACK_IMPORTED_MODULE_1__["loadSSL"]; });



/***/ }),

/***/ "./src/server/utils/logger.ts":
/*!************************************!*\
  !*** ./src/server/utils/logger.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
const{combine,timestamp,label,simple,json,colorize}=winston__WEBPACK_IMPORTED_MODULE_0__["format"];const logger=Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({format:combine(colorize({all:"development"==='development'}),label({label:'Wetty'}),timestamp(),simple()),transports:[new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({level: true?'debug':undefined,handleExceptions:true})]});/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./src/server/utils/ssl.ts":
/*!*********************************!*\
  !*** ./src/server/utils/ssl.ts ***!
  \*********************************/
/*! exports provided: loadSSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSSL", function() { return loadSSL; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
async function loadSSL(ssl){if(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(ssl)||lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(ssl.key)||lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(ssl.cert))return{};const[key,cert]=await Promise.all([Object(fs_extra__WEBPACK_IMPORTED_MODULE_1__["readFile"])(Object(path__WEBPACK_IMPORTED_MODULE_2__["resolve"])(ssl.key)),Object(fs_extra__WEBPACK_IMPORTED_MODULE_1__["readFile"])(Object(path__WEBPACK_IMPORTED_MODULE_2__["resolve"])(ssl.cert))]);return{key,cert};}

/***/ }),

/***/ "./src/server/wetty/index.ts":
/*!***********************************!*\
  !*** ./src/server/wetty/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startWeTTy; });
/* harmony import */ var _socketServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socketServer */ "./src/server/socketServer/index.ts");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../command */ "./src/server/command/index.ts");
/* harmony import */ var _term__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term */ "./src/server/wetty/term/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/server/utils/index.ts");
/**
 * Create WeTTY server
 * @module WeTTy
 *//**
 * Starts WeTTy Server
 * @name startWeTTy
 */function startWeTTy(ssh={user:'',host:'localhost',auth:'password',port:22},serverConf={base:'/wetty/',port:3000,host:'0.0.0.0',title:'WeTTy',bypasshelmet:false},command='',forcessh=false,ssl){return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["loadSSL"])(ssl).then(sslBuffer=>{if(ssh.key){_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
! Password-less auth enabled using private key from ${ssh.key}.
! This is dangerous, anything that reaches the wetty server
! will be able to run remote operations without authentication.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);}const io=Object(_socketServer__WEBPACK_IMPORTED_MODULE_0__["default"])(serverConf,sslBuffer);/**
     * Wetty server connected too
     * @fires WeTTy#connnection
     */io.on('connection',socket=>{/**
       * @event wetty#connection
       * @name connection
       */_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].info('Connection accepted.');const{args,user:sshUser}=Object(_command__WEBPACK_IMPORTED_MODULE_1__["default"])(socket,ssh,command,forcessh);_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].debug('Command Generated',{user:sshUser,cmd:args.join(' ')});if(sshUser){Object(_term__WEBPACK_IMPORTED_MODULE_2__["spawn"])(socket,args);}else{Object(_term__WEBPACK_IMPORTED_MODULE_2__["login"])(socket).then(username=>{args[1]=`${username.trim()}@${args[1]}`;_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].debug('Spawning term',{username:username.trim(),cmd:args.join(' ').trim()});return Object(_term__WEBPACK_IMPORTED_MODULE_2__["spawn"])(socket,args);}).catch(()=>{_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].info('Disconnect signal sent');});}});return io;});}

/***/ }),

/***/ "./src/server/wetty/term/index.ts":
/*!****************************************!*\
  !*** ./src/server/wetty/term/index.ts ***!
  \****************************************/
/*! exports provided: spawn, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spawn */ "./src/server/wetty/term/spawn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _spawn__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/server/wetty/term/login.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _login__WEBPACK_IMPORTED_MODULE_1__["login"]; });



/***/ }),

/***/ "./src/server/wetty/term/login.ts":
/*!****************************************!*\
  !*** ./src/server/wetty/term/login.ts ***!
  \****************************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-pty */ "node-pty");
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_pty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xterm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xterm */ "./src/server/wetty/term/xterm.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
const fs=__webpack_require__(/*! fs */ "fs");const os=__webpack_require__(/*! os */ "os");const crypto=__webpack_require__(/*! crypto */ "crypto");function login(socket){// Check request-header for username
const remoteUser=socket.request.headers['remote-user'];if(remoteUser){return new Promise(resolve=>{resolve(remoteUser);});}let termPath=Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(__dirname,'buffer.js');if(termPath.match(/^\/snapshot\//)){// Handle case for binary build with pkg: copy terminal.js from inside binary package to
// temporary directory and use it from there.
const fileData=fs.readFileSync(termPath);termPath=Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(os.tmpdir(),`${crypto.randomFillSync(Buffer.alloc(10)).toString('hex')}.js`);fs.writeFileSync(termPath,fileData);}// Request carries no username information
// Create terminal and ask user for username
const term=Object(node_pty__WEBPACK_IMPORTED_MODULE_0__["spawn"])('/usr/bin/env',['node',termPath],_xterm__WEBPACK_IMPORTED_MODULE_1__["xterm"]);let buf='';return new Promise((resolve,reject)=>{term.on('exit',()=>{resolve(buf);});term.on('data',data=>{socket.emit('data',data);});socket.on('input',input=>{term.write(input);buf=/\177/.exec(input)?buf.slice(0,-1):buf+input;}).on('disconnect',()=>{term.kill();reject();});});}

/***/ }),

/***/ "./src/server/wetty/term/spawn.ts":
/*!****************************************!*\
  !*** ./src/server/wetty/term/spawn.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return spawnTerm; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-pty */ "node-pty");
/* harmony import */ var node_pty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_pty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/server/utils/index.ts");
/* harmony import */ var _xterm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xterm */ "./src/server/wetty/term/xterm.ts");
function spawnTerm(socket,args){const term=Object(node_pty__WEBPACK_IMPORTED_MODULE_1__["spawn"])('/usr/bin/env',args,_xterm__WEBPACK_IMPORTED_MODULE_3__["xterm"]);const{pid}=term;const address=args[0]==='ssh'?args[1]:'localhost';_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].info('Process Started on behalf of user',{pid,address});socket.emit('login');term.on('exit',code=>{_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].info('Process exited',{code,pid});socket.emit('logout');socket.removeAllListeners('disconnect').removeAllListeners('resize').removeAllListeners('input');});term.on('data',data=>{socket.emit('data',data);});socket.on('resize',({cols,rows})=>{term.resize(cols,rows);}).on('input',input=>{if(!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(term))term.write(input);}).on('disconnect',()=>{term.kill();_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].info('Process exited',{code:0,pid});});}

/***/ }),

/***/ "./src/server/wetty/term/xterm.ts":
/*!****************************************!*\
  !*** ./src/server/wetty/term/xterm.ts ***!
  \****************************************/
/*! exports provided: xterm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xterm", function() { return xterm; });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isUndefined */ "lodash/isUndefined");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
const xterm={name:'xterm-256color',cols:80,rows:30,cwd:process.cwd(),env:Object.assign({},...Object.keys(process.env).filter(key=>!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(process.env[key])).map(key=>({[key]:process.env[key]})))};

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-winston":
/*!**********************************!*\
  !*** external "express-winston" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-winston");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "node-pty":
/*!***************************!*\
  !*** external "node-pty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-pty");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map