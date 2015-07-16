'use strict'

var ENHARMONICS = [['C', 'B#', 'Dbb'], ['Db', 'C#', 'B##'],
  ['D', 'Ebb', 'C##'], ['Eb', 'D#', 'Fbb'], ['E', 'Fb', 'D##'],
  ['F', 'E#', 'Gbb'], ['Gb', 'F#', 'E##'], ['G', 'Abb', 'F##'],
  ['Ab', 'G#'], ['A', 'Bbb', 'G##'], ['Bb', 'A#', 'Cbb'], ['B', 'Cb', 'A##']]
var NOTE_TO_ENHARMONICS = {}
ENHARMONICS.forEach(function (names) {
  names.forEach(function (name) {
    NOTE_TO_ENHARMONICS[name] = names
  })
})

function octave (name, octave) {
  if (!octave) return ''
  else if (name[0] === 'B' && name[1] === '#') return octave - 1
  else if (name[0] === 'C' && name[1] === 'b') return octave + 1
  else return octave
}

function isClass (name, pitchClass) {
  return !pitchClass || name[0] === pitchClass
}

module.exports = function enharmonics (name, oct, pitchClass) {
  var list = []
  NOTE_TO_ENHARMONICS[name].forEach(function (enharmonic) {
    if (enharmonic !== name && isClass(enharmonic, pitchClass)) {
      list.push(enharmonic + octave(enharmonic, oct))
    }
  })
  return list
}
