const vowels = [
  ['α', 'ἀ', 'ά', 'ἄ'],
  ['υ', 'ὑ', 'ὐ'],
  ['ο', 'ό', 'ὀ', 'ὸ', 'ὅ'],
  ['ι', 'ί', 'ἱ'],
  ['η', 'ῆ', 'ὴ', 'ή'],
  ['ε', 'έ', 'ἐ', 'ἔ', 'ὲ'],
  ['ω', 'ῶ']
];

function isVowel(character) {
  return vowels.some(function(vowel) {
    return vowel.indexOf(character) !== -1
  });
}

function isConsonant(character) {
  return !exports.isVowel(character);
}

function isDiphthong(characters) {
  return [
    'ai',
    'ει',
    'οι',
    'υι',
    'αυ',
    'ου',
    'ευ',
    'ηυ'
  ].indexOf(characters) !== -1
}

function beginsWithVowel(morpheme) {
  return isVowel(morpheme[0]);
}

function lengthen(vowel) {

}

function connectAndLengthen(part1,part2) {

}

exports.isVowel = isVowel;
exports.isConsonant = isConsonant;