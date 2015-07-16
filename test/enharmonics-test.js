var vows = require('vows')
var assert = require('assert')
var enharmonics = require('../')

vows.describe('enharmonics function').addBatch({
  'enharmonics without octave': function () {
    assert.deepEqual(enharmonics('C'), ['B#', 'Dbb'])
    assert.deepEqual(enharmonics('C#'), ['Db', 'B##'])
  },
  'enharmonics with octave': function () {
    assert.deepEqual(enharmonics('C', 2), ['B#1', 'Dbb2'])
    assert.deepEqual(enharmonics('Db', 2), ['C#2', 'B##1'])
    assert.deepEqual(enharmonics('C', 4), ['B#3', 'Dbb4'])
    assert.deepEqual(enharmonics('C#', 4), ['Db4', 'B##3'])
  },
  'with pitch class': function () {
    assert.deepEqual(enharmonics('Db', 2, 'C'), ['C#2'])
    assert.deepEqual(enharmonics('Db', null, 'C'), ['C#'])
    assert.deepEqual(enharmonics('Db', 4, 'E'), [])
  }
}).export(module)
