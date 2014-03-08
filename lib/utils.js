const consonants = [
  'ς',
  'τ',
  'θ',
  'π',
  'σ',
  'δ',
  'φ',
  'γ',
  'ξ',
  'κ',
  'λ',
  'ζ',
  'χ',
  'ψ',
  'β',
  'ν',
  'μ'
];

const longVowels = [
  ['η', 'ἡ', 'ἠ', 'ή', 'ὴ', 'ῆ', 'ῇ', 'ἤ', 'ἦ'],
  ['ῃ'],
  ['ω', 'ὡ', 'ὠ', 'ώ', 'ὼ', 'ῶ']
];

const shortVowels = [
  ['α', 'ἁ', 'ἀ', 'ά', 'ὰ', 'ἄ'],
  ['υ', 'ὑ', 'ὐ', 'ύ', 'ὺ', 'ὔ'],
  ['ο', 'ὁ', 'ὀ', 'ό', 'ὸ', 'ὅ'],
  ['ι', 'ἱ', 'ἰ', 'ί', 'ὶ', 'ἴ', 'ἶ'],
  ['ε', 'έ', 'ἐ', 'ἔ', 'ὲ']
];

const vowels = longVowels.concat(shortVowels);

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
    'αι',
    'ει',
    'οι',
    'υι',
    'αυ',
    'ου',
    'ευ',
    'ηυ'
  ].indexOf(characters) !== -1
}

function vowelWithoutAccent(character) {
  for(var x = 0;x < vowels.length;x++) {
    if(vowels[x].indexOf(character) !== -1) {
      return vowels[x][0];
    }
  }
  return null;
}

function withoutAccents(characters) {
  return characters.split('').map(function(character) {
    if(isConsonant(character)) return character;
    return vowelWithoutAccent(character)
  }).join('');
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
exports.withoutAccents = withoutAccents;