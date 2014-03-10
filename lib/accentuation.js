var unorm = require('unorm');
var utils = require('./utils');
var syllabify = require('./syllabify');
var removeAcutes = require('./utils/remove_acutes');
var removeGraves = require('./utils/remove_graves');
var accentuateLastVowel = require('./utils/accentuate_last_vowel');
var containsCircumflex = require('./utils/contains_circumflex');

function accentuateAntepenult(syllables) {
  syllables[syllables.length - 3] = accentuateLastVowel(syllables[syllables.length - 3]);
  return syllables;
}

function accentuatePenult(syllables) {
  syllables[syllables.length - 2] = accentuateLastVowel(syllables[syllables.length - 2]);
  return syllables;
}

function accentuateUltima(syllables) {
  syllables[syllables.length - 1] = accentuateLastVowel(syllables[syllables.length - 1]);
  return syllables;
}

function accentuateVerb(word) {
  word = removeAcutes(removeGraves(word));
  var syllables = syllabify(word);
  var antepenult = syllables[syllables.length - 3];
  var penult = syllables[syllables.length - 2];
  var ultima = syllables[syllables.length - 1];

  // if circumflex is on the ultima, then acute was absorbed from penultima
  if(containsCircumflex(ultima)) {
    return word;
  }

  if(syllables.length > 1) {
    if(utils.isLongSyllable(ultima)) {
      syllables = accentuatePenult(syllables);
    } else {
      if(syllables.length > 2) {
        syllables = accentuateAntepenult(syllables);
      } else {
        // "The acute may not stand on a long penult when the
        // ultima is short: δούλου, but δοῦλος." (Black)

        if(utils.isLongSyllable(ultima)) {
          syllables = accentuatePenult(syllables);
        } else if(!utils.isLongSyllable(penult)) {
          syllables = accentuatePenult(syllables);
        }
      }
    }
  } else {
    syllables = accentuateUltima(syllables);
  }

  return unorm.nfc(syllables.join(''));
}

exports.accentuateVerb = accentuateVerb;

// John 9:40-41 has it all...

/*
oxytone
  words 'born' with accent on ultima

paroxytone
  words 'born' with accent on penultima

proparoxytone
  words 'born' with accent on antepenultima
*/