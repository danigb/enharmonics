var vows = require('vows')
var assert = require('assert')
var enharmonics = require('../')

vows.describe('pitch/enharmonics').addBatch({
  'get enharmonics': function () {
    assert.deepEqual(enharmonics('C'), [ 'B#', 'Dbb' ])
    assert.deepEqual(enharmonics('B'), [ 'A##', 'Cb' ])
    assert.deepEqual(enharmonics('F5'), [ 'E#5', 'Gbb5' ])
    assert.deepEqual(enharmonics('E#2'), [ 'D###2', 'F2' ])
    assert.deepEqual(enharmonics('A###6'), [ 'G#####6', 'B#6' ])
    assert.deepEqual(enharmonics('A'), [ 'G##', 'Bbb' ])
    assert.deepEqual(enharmonics('Ab3'), [ 'G#3', 'Bbbb3' ])
    assert.deepEqual(enharmonics('Db'), [ 'C#', 'Ebbb' ])
  },
  'include pitch': function () {
    assert.deepEqual(enharmonics('C4', true), [ 'B#3', 'C4', 'Dbb4' ])
  },
  'with arrays': function () {
    assert.deepEqual(enharmonics([0, 0, 0], true), [[ 6, 1, -1 ], [ 0, 0, 0 ], [ 1, -2, 0 ]])
  }
}).export(module)
