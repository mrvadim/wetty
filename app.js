const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const server = require('socket.io');
const pty = require('pty.js');
const fs = require('fs');

let httpserv;

exports.start = function(opts) {
  // Defaults for ssh terminal to be run with
  let runhttps = false;
  let globalsshport = 22;
  let globalsshhost = 'localhost';
  let globalsshauth = 'password,keyboard-interactive';
  let globalsshuser = '';

  // Change defaults if passed
  if (opts.sshport) {
    globalsshport = opts.sshport;
  }

  if (opts.sshhost) {
    globalsshhost = opts.sshhost;
  }

  if (opts.sshauth) {
    globalsshauth = opts.sshauth;
  }

  if (opts.sshuser) {
    globalsshuser = opts.sshuser;
  }

  if (opts.sslkey && opts.sslcert) {
    runhttps = true;
    opts['ssl'] = {};
    opts.ssl['key'] = fs.readFileSync(path.resolve(opts.sslkey));
    opts.ssl['cert'] = fs.readFileSync(path.resolve(opts.sslcert));
  }

  process.on('uncaughtException', function(e) {
    console.error('Error in Wetty terminal: ' + e);
  });

  const app = express();

  app.get('/wetty/ssh', (req, res) => {
    res.sendFile(__dirname + '/public/wetty/index.html');
  });
  app.use('/', express.static(path.join(__dirname, 'public')));

  if (runhttps) {
    httpserv = https.createServer(opts.ssl, app).listen(opts.port, function() {
      console.log('https on port ' + opts.port);
    });
  } else {
    httpserv = http.createServer(app).listen(opts.port, function() {
      console.log('http on port ' + opts.port);
    });
  }

  const io = server(httpserv,{path: '/wetty/socket.io'});

  io.on('connection', function(socket){
    const request = socket.request;
    let credentials = {};

    console.log((new Date()) + ' Connection accepted.');

    if (match = request.headers.referer.match(/\/wetty\/ssh\?(.*)#?/)) {
      credentials = match[1].split('&').reduce((acc, cur) => {
        const entry = cur.split('=');

        return Object.assign(acc, { [entry[0].toLowerCase()]: entry[1] });
      }, {});
    }

    let sshuser = credentials['sshuser'] || globalsshuser;
    const sshhost = credentials['sshhost'] || globalsshhost;
    const sshport = credentials['sshport'] || globalsshport;
    const sshauth = globalsshauth;

    if (sshuser) {
      sshuser += '@';
    }

    if (process.env.DEBUG) {
      console.log(
        (new Date()) + " REFERER", request.headers.referer,
        "PARSED INTO CREDENTIALS", sshuser, sshhost, sshport
      );
    }

    const term = pty.spawn('ssh', [
      sshuser + sshhost,
      '-p',
      sshport,
      '-o',
      'PreferredAuthentications=' + sshauth
    ], { name: 'xterm-256color', cols: 80, rows: 30, uid: 0, gid: 0 });

    console.log((new Date()) + " PID=" + term.pid + " STARTED on behalf of user=" + sshuser);
    term.on('data', function(data) {
      socket.emit('output', data);
    });
    term.on('exit', function(code) {
      console.log((new Date()) + " PID=" + term.pid + " ENDED");
    });
    socket.on('resize', function(data) {
      term.resize(data.col, data.row);
    });
    socket.on('input', function(data) {
      term.write(data);
    });
    socket.on('disconnect', function() {
      console.log((new Date()) + " PID=" + term.pid + " DISCONNECTED");
      term.end();
    });
  });
}

exports.stop = function() {
  httpserv.close();
}
