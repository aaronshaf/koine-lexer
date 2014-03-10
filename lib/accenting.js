var utils = require('./utils');
var syllabify = require('./syllabify');

function syllableHasCircumflex(syllable) {
  var vowelsOnly = syllable.split('').filter(utils.isVowel);
  // not finished...
}

function removeAllAcutes(syllables) {

}

function moveAcuteToAntepenultima(syllables) {

}

function accentuateVerb(word) {
  var syllables = syllabify(word);
  var lastSyllable = syllables[syllables.length - 1];

  // if circumflex is on the ultima, then acute was absorbed from penultima
  if(syllableHasCircumflex(lastSyllable)) {
    return word;
  }

  if(utils.isLongSyllable(lastSyllable)) {
    if(syllables.length > 2) {
      syllables = moveAcuteToAntepenultima(syllables);  
    } else if(syllables.length === 2) {
      // put a circumflex on the penultima?
    }
  }
}

// if ultima is long, then go to penultima
// if ultima is short, then go to antepenult

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