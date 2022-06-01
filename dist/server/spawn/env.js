"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envVersion = void 0;

var _child_process = require("child_process");

var envVersion = function envVersion() {
  return new Promise(function (resolve, reject) {
    (0, _child_process.exec)('/usr/bin/env --version', function (error, stdout, stderr) {
      if (error) {
        return reject(Error("error getting env version: ".concat(error.message)));
      }

      if (stderr) {
        return reject(Error("error getting env version: ".concat(stderr)));
      }

      return resolve(parseInt(stdout.split(/\r?\n/)[0].split(' (GNU coreutils) ')[1].split('.')[0], 10));
    });
  });
};

exports.envVersion = envVersion;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyL3NwYXduL2Vudi5qcyIsIm5hbWVzIjpbImVudlZlcnNpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImV4ZWMiLCJlcnJvciIsInN0ZG91dCIsInN0ZGVyciIsIkVycm9yIiwibWVzc2FnZSIsInBhcnNlSW50Iiwic3BsaXQiXSwic291cmNlcyI6WyJzZXJ2ZXIvc3Bhd24vZW52LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmV4cG9ydCBjb25zdCBlbnZWZXJzaW9uID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGV4ZWMoJy91c3IvYmluL2VudiAtLXZlcnNpb24nLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChFcnJvcihgZXJyb3IgZ2V0dGluZyBlbnYgdmVyc2lvbjogJHtlcnJvci5tZXNzYWdlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KEVycm9yKGBlcnJvciBnZXR0aW5nIGVudiB2ZXJzaW9uOiAke3N0ZGVycn1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocGFyc2VJbnQoc3Rkb3V0LnNwbGl0KC9cXHI/XFxuLylbMF0uc3BsaXQoJyAoR05VIGNvcmV1dGlscykgJylbMV0uc3BsaXQoJy4nKVswXSwgMTApKTtcbiAgICB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW52LmpzLm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0VBQUEsT0FBTSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0lBQzdELElBQUFDLG1CQUFBLEVBQUssd0JBQUwsRUFBK0IsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixFQUEyQjtNQUN0RCxJQUFJRixLQUFKLEVBQVc7UUFDUCxPQUFPRixNQUFNLENBQUNLLEtBQUssc0NBQStCSCxLQUFLLENBQUNJLE9BQXJDLEVBQU4sQ0FBYjtNQUNIOztNQUNELElBQUlGLE1BQUosRUFBWTtRQUNSLE9BQU9KLE1BQU0sQ0FBQ0ssS0FBSyxzQ0FBK0JELE1BQS9CLEVBQU4sQ0FBYjtNQUNIOztNQUNELE9BQU9MLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDSixNQUFNLENBQUNLLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLENBQXRCLEVBQXlCQSxLQUF6QixDQUErQixtQkFBL0IsRUFBb0QsQ0FBcEQsRUFBdURBLEtBQXZELENBQTZELEdBQTdELEVBQWtFLENBQWxFLENBQUQsRUFBdUUsRUFBdkUsQ0FBVCxDQUFkO0lBQ0gsQ0FSRDtFQVNILENBVitCLENBQU47QUFBQSxDQUFuQiJ9
