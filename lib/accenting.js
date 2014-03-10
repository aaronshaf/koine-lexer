var utils = require('./utils');
var syllabify = require('./syllabify');
var removeAcutes = require('./utils/remove_acutes');
var removeGraves = require('./utils/remove_graves');
var containsCircumflex = require('./utils/contains_circumflex');

function moveAcuteToAntepenultima(syllables) {

}

function accentVerb(word) {
  word = removeAcutes(removeGraves(word));
  var syllables = syllabify(word);
  var ultima = syllables[syllables.length - 1];

  // if circumflex is on the ultima, then acute was absorbed from penultima
  if(containsCircumflex(ultima)) {
    return word;
  }

  if(utils.isLongSyllable(ultima)) {
    if(syllables.length > 2) {
      syllables = moveAcuteToAntepenultima(syllables);  
    } else if(syllables.length === 2) {
      // put a circumflex on the penultima?
    }
  } else {

  }

  return syllables.join('');
}

// if ultima is long, then go to penultima
// if ultima is short, then go to antepenult

exports.accentVerb = accentVerb;

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