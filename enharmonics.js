'use strict'

var transpose = require('pitch-transpose')

var ASC = '2d'
var DESC = '-2d'

/**
 * Get all the enharmonics of a pitch (up to 4 alterations)
 *
 * @name enharmonics
 * @function
 * @param {String} pitch - the pitch to get the enharmonics from
 * @param {boolean} includeSource - (Optional) If true, the returned array
 * will contain the given pitch. False by default
 * @return {Array} an array of pitches ordered by distance to the given one
 *
 * @example
 * enharmonics('C') // => [ 'A###3', 'B#3', 'Dbb4', 'Ebbbb4' ]
 * enharmonics('Ab3') // => ['E####3', 'F###3', 'G#3', 'Bbbb3', 'Cbbbb4']
 * enharmonics('C', true) // => [ 'A###3', 'B#3', 'C4', 'Dbb4', 'Ebbbb4' ]
 */
function enharmonics (pitch, includePitch) {
  var enharmonics = []
  enharmonics.push(transpose(DESC, pitch))
  if (includePitch) enharmonics.push(pitch)
  enharmonics.push(transpose(ASC, pitch))
  return enharmonics
}

module.exports = enharmonics
