var utils = require('./utils');
var syllabify = require('./syllabify');

function isLongSyllable(syllable) {
  var vowelsOnly = syllable.split('').filter(utils.isVowel);
  if(!vowelsOnly.length) return false;
  if(vowelsOnly.length === 2) {
    return utils.isLongDiphthong(vowelsOnly);
  }
  return utils.isLongVowel(vowelsOnly[0]);
}

function removeAllAcutes(syllables) {

}

function moveAcuteToAntepenultima(syllables) {

}

function accentuateVerb(word) {
  var syllables = syllabify(word);
  var lastSyllable = syllables[syllables.length - 1];

  if(isLongSyllable(lastSyllable)) {
    if(syllables.length > 2) {
      syllables = moveAcuteToAntepenultima(syllables);  
    } else if(syllables.length === 2) {
      // put a circumflex on the penultima?
    }
  }
}

exports.accentuateVerb = accentuateVerb;

// acute can be on last three syllables

// circumflex on last two (if long)

// grave on last

// John 9:40-41 has it all...

/*
oxytone
  words 'born' with accent on ultima

paroxytone
  words 'born' with accent on penultima

proparoxytone
  words 'born' with accent on antepenultima
*/