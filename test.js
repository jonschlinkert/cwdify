/*!
 * cwdify <https://github.com/jonschlinkert/cwdify>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var cwdify = require('./');

it('should replace the cwd with `~+`', function () {
  assert.equal(cwdify(process.cwd() + '/'), '.');
  assert.equal(cwdify(process.cwd() + '/foo/'), '~+/foo');
  assert.equal(cwdify(process.cwd() + '/foo/bar'), '~+/foo/bar');
  assert.equal(cwdify('foo/bar'), '~+/foo/bar');
});
