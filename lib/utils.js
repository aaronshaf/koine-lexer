var unorm = require('unorm');

const consonants = ["β", "γ", "δ", "ζ", "θ", "κ", "λ", "μ", "ν", "ξ", "π", "ς", "σ", "τ", "φ", "χ", "ψ"];
const longVowels = ["η", "ω"];
const shortVowels = ["α", "ε", "ι", "ο", "υ"];
const diphthongs = ["αι", "αυ", "ει", "ευ", "ηυ", "οι", "ου", "υι"];
const vowels = longVowels.concat(shortVowels);

function isVowel(character) { return vowels.indexOf(unorm.nfd(character)[0]) !== -1; }
function beginsWithVowel(characters) { return isVowel(characters[0]); }
function isConsonant(character) { return !exports.isVowel(character); }
function isDiphthong(characters) { return diphthongs.indexOf(characters) !== -1 }
function withoutAccent(character) { return unorm.nfd(character)[0]; }
function withoutAccents(characters) { return characters.split('').map(withoutAccent).join(''); }


function lengthen(vowel) {

}

function connectAndLengthen(part1,part2) {

}

function removePunctuation(characters) {
  return characters.replace(/[,.·;]/g,'');
}

function clean(characters) {
  return characters
    //remove newlines
    .replace(/(\r\n|\n|\r)/gm,"")
    // remove multiple spaces as well
    .replace(/ +(?= )/g,'');
}

function removeNumbers(characters) {
  return clean(characters)
    .replace(/[1234567890]/g,'');
}

exports.isVowel = isVowel;
exports.isConsonant = isConsonant;
exports.withoutAccents = withoutAccents;
exports.removeNumbers = removeNumbers;
exports.removePunctuation = removePunctuation;