# enharmonics

[![Build Status](https://travis-ci.org/danigb/enharmonics.svg?branch=master)](https://travis-ci.org/danigb/enharmonics)
[![Test Coverage](https://codeclimate.com/github/danigb/enharmonics/badges/coverage.svg)](https://codeclimate.com/github/danigb/enharmonics/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/enharmonics/badges/gpa.svg)](https://codeclimate.com/github/danigb/enharmonics)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/enharmonics)
[![array-notation](https://img.shields.io/badge/array--notation-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

Get the [enharmonics](https://en.wikipedia.org/wiki/Enharmonic) of a given note:

```js
var enharmonics = require('enharmonics')
enharmonics('C') // => ['B#', 'Cbb']
```

__This is a low lever library. Probably you want to use [musical-note](http://github.com/danigb/musical-note)__

## Usage 

You can install the module with npm: `npm i --save enharmonics`. If you need browser support use browserify or webpack.

## API

There's only one method:

___`enharmonics(name [, octave, pitchClass])`___

It returns an array of enharmonics to the given note name. The params are:

- name: required, the complete name of the note. It includes the pitch class and the alterations. The __pitch class must be in uppercase__. Examples: `C`, `Bb`, `F##`, `E##`, `Gbb`
- octave: optional. If given, must be a integer. The returned array will contain octave numbers if this param is present.
- pitchClass: optional. If not present, it returns an array of enharmonics __without__ the original note name. If given, it returns enharmonics with the given pitchClass (can include the original note)

### Examples

```js
enharmonics('C') // => ['B#', 'Dbb']
enharmonics('C', 2) // => ['B#1', 'Dbb2']
enharmonics('C#', 4) // => ['Db4', 'B##3']
enharmonics('Db', 2) // => ['C#2', 'B##1'])
enharmonics('Db', 2, 'D') // => ['Db2'])
enharmonics('Db', 2, 'C') // => ['C#2']
enharmonics('Db', null, 'C') // => ['C#']
enharmonics('Db', 4, 'E') // => []
```

## License

MIT License
