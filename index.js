'use strict';

var isAbsolute = require('is-absolute');
var path = require('path');

module.exports = function cwdify(fp) {
  var cwd = process.cwd();
  fp = path.resolve(fp);
  if (fp === cwd) return '.';
  if (!isAbsolute(fp)) {
    fp = path.join(cwd, fp);
  }
  return fp.replace(cwd, '~+');
};
