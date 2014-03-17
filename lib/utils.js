var unorm = require('unorm');

const consonants = ["β", "γ", "δ", "ζ", "θ", "κ", "λ", "μ", "ν", "ξ", "π", "ρ", "ς", "σ", "τ", "φ", "χ", "ψ"];
const consonantClustersPronouncedTogether = [
  "βλ",
  "βρ",
  "γλ",
  "γν",
  "γρ",
  "δρ",
  "θλ",
  "θρ",
  "θν",
  "κλ",
  "κρ",
  "κτ",
  "μν",
  "πλ",
  "πν",
  "πρ",
  "πτ",
  "σκ",
  "σκλ",
  "σμ",
  "σπ",
  "σπλ",
  "στ",
  "στρ",
  "σφ",
  "σθ",
  "σχ",
  "τρ",
  "φθ",
  "φλ",
  "φρ",
  "χρ",
  "χθ"
];

const longVowels = ["η", "ω"];
const shortVowels = ["α", "ε", "ι", "ο", "υ"];
const vowels = longVowels.concat(shortVowels);

const longDiphthongs = ["ει", "ηυ", "ου", "ευ", "αι", "υι"];
const shortDiphthongsWhenFinal = ["αυ", "οι"];
const diphthongs = longDiphthongs.concat(shortDiphthongsWhenFinal);

function isLongVowel(character) {
  return longVowels.indexOf(character) !== -1;
}

function isLongSyllable(syllable) {
  var vowelsOnly = syllable.split('').filter(isVowel).join('');
  if(vowelsOnly.length === 2) {
    return isDiphthong(vowelsOnly);
  }
  return isLongVowel(vowelsOnly);
}

function isVowel(character) {
  return vowels.indexOf(unorm.nfd(character)[0]) !== -1;
}

function beginsWithVowel(characters) {
  return isVowel(characters[0]);
}

function isConsonant(character) {
  return !exports.isVowel(character);
}

function isDiphthong(characters) {
  return diphthongs.indexOf(characters) !== -1;
}

function beginsWithConsonant(characters) {
  return isConsonant(characters[0]);
}

function beginsWithDiphthong(characters) {
  return diphthongs.indexOf(withoutAccents(characters).substr(0,2)) !== -1;
}

function beginsWithConsonantClusterPronouncedTogether(characters) {
  var charactersLowerCased = characters.toLowerCase();
  for(var x = 0;x < consonantClustersPronouncedTogether.length;x++) {
    if(charactersLowerCased.indexOf(consonantClustersPronouncedTogether[x]) === 0) {
      return characters.substr(0,consonantClustersPronouncedTogether[x].length);
    }
  }
  return null;
}

function endsWithShortDiphthong(characters) {
  return shortDiphthongsWhenFinal.indexOf(characters.substr(characters - 2)) !== -1;
}

function isSingleConsonant(characters) {
  return characters.length === 1 && isConsonant(characters[0]);
}

function beginsWithSingleConsonantFollowedByVowel(characters) {
  return isConsonant(characters[0]) && isVowel(characters[1]);
}

function beginsWithVowelFollowedByVowel(characters) {
  return isVowel(characters[0]) && isVowel(characters[1]);
}

function beginsWithDoubleConsonant(characters) {
  return characters.length > 1
      && isConsonant(characters[0])
      && isConsonant(characters[1]);
}

function withoutAccent(character) {
  return unorm.nfd(character)[0];
}

function withoutAccents(characters) {
  return characters.split('').map(withoutAccent).join('');
}

function removePunctuation(characters) {
  return characters.replace(/[,.·;]/g,'');
}

function removeNumbers(characters) {
  return clean(characters).replace(/[1234567890]/g,'');
}

function lengthen(vowel) {

}

function connectAndLengthen(part1,part2) {

}

function clean(characters) {
  return characters
    //remove newlines
    .replace(/(\r\n|\n|\r)/gm,"")
    // remove multiple spaces as well
    .replace(/ +(?= )/g,'');
}

exports.isVowel = isVowel;
exports.isLongVowel = isLongVowel;
exports.isLongSyllable = isLongSyllable;
exports.isConsonant = isConsonant;
exports.withoutAccents = withoutAccents;
exports.removeNumbers = removeNumbers;
exports.removePunctuation = removePunctuation;
exports.isSingleConsonant = isSingleConsonant;
exports.beginsWithVowel = beginsWithVowel;
exports.beginsWithDiphthong = beginsWithDiphthong;
exports.beginsWithConsonant = beginsWithConsonant;
exports.beginsWithVowelFollowedByVowel = beginsWithVowelFollowedByVowel;
exports.beginsWithSingleConsonantFollowedByVowel = beginsWithSingleConsonantFollowedByVowel;
exports.beginsWithDoubleConsonant = beginsWithDoubleConsonant;
exports.beginsWithConsonantClusterPronouncedTogether = beginsWithConsonantClusterPronouncedTogether;
exports.endsWithShortDiphthong = endsWithShortDiphthong;
