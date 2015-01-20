# cwdify [![NPM version](https://badge.fury.io/js/cwdify.svg)](http://badge.fury.io/js/cwdify)

> Replace the cwd in an absolute path with the Bash equivalent: `~+`. Like untildify, but for cwd instead of userhome.

## Install with [npm](npmjs.org)

```bash
npm i cwdify --save
```

## Usage

```js
var cwdify = require('cwdify');

cwdify('/Users/jonschlinkert/dev/cwdify/foo/bar');
//=> '~+/foo/bar'
```

## Related

- [expand-tilde](https://github.com/jonschlinkert/expand-tild) to expand tilde paths and cwd paths to absolute paths.
- [tildify](https://github.com/sindresorhus/tildify) to replace the user home in an absolute path with a tilde path.
- [untildify](https://github.com/sindresorhus/untildify) for the reverse of tildify.


## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/cwdify/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 20, 2015._
