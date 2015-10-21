'use strict'

var transpose = require('pitch-transpose')

var ASC = [1, -2, 0] // dimished second
var DESC = [6, 1, -1] // descending dimished second

/**
 * Get all the enharmonics of a pitch (up to 4 alterations)
 *
 * @name enharmonics
 * @function
 * @param {String} pitch - the pitch to get the enharmonics from
 * @param {boolean} includeSource - (Optional) If true, the returned array
 * will contain the given pitch. False by default
 * @return {Array<String>} an array of pitches ordered by distance to the given one
 *
 * @example
 * enharmonics('C') // => ['B#', 'Dbb']
 * enharmonics('A') // => ['G##', 'Bbb']
 * enharmonics('C#4') // => ['B##3', 'Db4']
 * enharmonics('Db') // => ['C#', 'Ebbb'])
 */
function enharmonics (pitch, includePitch) {
  var enharmonics = []
  enharmonics.push(transpose(DESC, pitch))
  if (includePitch) enharmonics.push(pitch)
  enharmonics.push(transpose(ASC, pitch))
  return enharmonics
}

module.exports = enharmonics
