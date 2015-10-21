# enharmonics

[![Build Status](https://travis-ci.org/danigb/enharmonics.svg?branch=master)](https://travis-ci.org/danigb/enharmonics)
[![Test Coverage](https://codeclimate.com/github/danigb/enharmonics/badges/coverage.svg)](https://codeclimate.com/github/danigb/enharmonics/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/enharmonics/badges/gpa.svg)](https://codeclimate.com/github/danigb/enharmonics)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/enharmonics.svg)](https://www.npmjs.com/package/enharmonics)
[![array-notation](https://img.shields.io/badge/array--notation-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

Get the [enharmonics](https://en.wikipedia.org/wiki/Enharmonic) of a given note, simple and fast:

```js
var enharmonics = require('enharmonics')
enharmonics('C') // => ['B#', 'Cbb']
```

This is piece of a complete music manipulation library called [tonal](https://github.com/danigb/tonal)

## Usage 

You can install the module with npm: `npm i --save enharmonics`. If you need browser support use browserify or webpack.

### Examples

```js
enharmonics('C') // => ['B#', 'Dbb']
enharmonics('C2') // => ['B#1', 'Dbb2']
enharmonics('C#4') // => ['Db4', 'B##3']
enharmonics('Db2') // => ['C#2', 'B##1'])
```

## License

MIT License
