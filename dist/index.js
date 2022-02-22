/*!
 * koine-lexer v3.0.4
 * (c) Aaron Shafovaloff
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var consonantClustersPronouncedTogether = [
    'βλ',
    'βρ',
    'γλ',
    'γν',
    'γρ',
    'δρ',
    'θλ',
    'θρ',
    'θν',
    'κλ',
    'κρ',
    'κτ',
    'μν',
    'πλ',
    'πν',
    'πρ',
    'πτ',
    'σκ',
    'σκλ',
    'σμ',
    'σπ',
    'σπλ',
    'στ',
    'στρ',
    'σφ',
    'σθ',
    'σχ',
    'τρ',
    'φθ',
    'φλ',
    'φρ',
    'χρ',
    'χθ',
];
var longVowels = ['η', 'ω', 'ᾳ'];
var shortVowels = ['α', 'ε', 'ι', 'ο', 'υ'];
var vowels = longVowels.concat(shortVowels);
var longDiphthongs = ['ει', 'ηυ', 'ου', 'ευ', 'αι', 'υι'];
var shortDiphthongsWhenFinal = ['αυ', 'οι'];
var diphthongs = longDiphthongs.concat(shortDiphthongsWhenFinal);
function isLongVowel(character) {
    return longVowels.indexOf(character) !== -1;
}
function isLongSyllable(syllable) {
    var vowelsOnly = syllable.split('').filter(isVowel).join('');
    if (vowelsOnly.length === 2) {
        return isDiphthong(vowelsOnly);
    }
    return isLongVowel(vowelsOnly);
}
function isVowel(character) {
    if (character === void 0) { character = ''; }
    return vowels.indexOf(character.normalize('NFD')[0] || '') !== -1;
}
function beginsWithVowel(characters) {
    return isVowel(characters[0]);
}
function isConsonant(character) {
    return !isVowel(character);
}
function isDiphthong(characters) {
    return diphthongs.indexOf(characters) !== -1;
}
function beginsWithConsonant(characters) {
    return isConsonant(characters[0] || '');
}
function beginsWithDiphthong(characters) {
    return diphthongs.indexOf(withoutAccents(characters).substr(0, 2)) !== -1;
}
function beginsWithConsonantClusterPronouncedTogether(characters) {
    var charactersLowerCased = characters.toLowerCase();
    for (var x = 0; x < consonantClustersPronouncedTogether.length; x++) {
        var tmp = consonantClustersPronouncedTogether[x] || '';
        if (charactersLowerCased.indexOf(tmp) === 0) {
            return characters.substr(0, tmp.length);
        }
    }
    return null;
}
function isSingleConsonant(characters) {
    return characters.length === 1 && isConsonant(characters[0] || '');
}
function beginsWithSingleConsonantFollowedByVowel(characters) {
    return isConsonant(characters[0] || '') && isVowel(characters[1]);
}
function beginsWithVowelFollowedByVowel(characters) {
    return isVowel(characters[0]) && isVowel(characters[1]);
}
function beginsWithDoubleConsonant(characters) {
    return (characters.length > 1 &&
        isConsonant(characters[0] || '') &&
        isConsonant(characters[1] || ''));
}
function withoutAccent(character) {
    return character.normalize('NFD')[0];
}
function withoutAccents(characters) {
    return characters.split('').map(withoutAccent).join('');
}

function syllabify(word) {
    if (word === void 0) { word = ''; }
    var syllables = [];
    var currentSyllable = '';
    var charactersRemaining = word.normalize('NFC');
    var cluster;
    function advanceSyllable() {
        if (currentSyllable.length) {
            syllables.push(currentSyllable);
            currentSyllable = '';
        }
    }
    function shiftCharacter() {
        currentSyllable += charactersRemaining[0];
        charactersRemaining = charactersRemaining.substr(1);
    }
    // let wordWithoutAccents = withoutAccents(word);
    while (charactersRemaining.length) {
        if (isSingleConsonant(word)) {
            shiftCharacter();
            continue;
        }
        if ((cluster =
            beginsWithConsonantClusterPronouncedTogether(charactersRemaining))) {
            if (currentSyllable.length) {
                advanceSyllable();
            }
            currentSyllable += cluster;
            charactersRemaining = charactersRemaining.substr(cluster.length);
            continue;
        }
        if (beginsWithSingleConsonantFollowedByVowel(charactersRemaining)) {
            // console.log('beginsWithSingleConsonantFollowedByVowel',charactersRemaining);
            if (currentSyllable.length) {
                advanceSyllable();
            }
            shiftCharacter();
            continue;
        }
        if (beginsWithDoubleConsonant(charactersRemaining)) {
            // console.log('beginsWithDoubleConsonant',charactersRemaining);
            shiftCharacter();
            advanceSyllable();
            continue;
        }
        if (beginsWithConsonant(charactersRemaining)) {
            shiftCharacter();
            continue;
        }
        if (beginsWithDiphthong(charactersRemaining)) {
            if (charactersRemaining[1]) {
                currentSyllable += charactersRemaining[0] + charactersRemaining[1];
            }
            charactersRemaining = charactersRemaining.substr(2);
            if (beginsWithVowel(charactersRemaining)) {
                advanceSyllable();
            }
            continue;
        }
        if (beginsWithVowelFollowedByVowel(charactersRemaining)) {
            // console.log('beginsWithVowelFollowedByVowel',charactersRemaining)
            shiftCharacter();
            advanceSyllable();
            continue;
        }
        shiftCharacter();
    }
    advanceSyllable();
    return syllables;
}

function isNotAcute(character) {
    return character.charCodeAt(0) !== 769;
}
function removeAcutes (characters) {
    if (characters === void 0) { characters = ''; }
    return characters
        .normalize('NFD')
        .split('')
        .filter(isNotAcute)
        .join('')
        .normalize('NFC');
}

function isNotGrave(character) {
    return character.charCodeAt(0) !== 768;
}
function removeGraves (characters) {
    if (characters === void 0) { characters = ''; }
    return characters
        .normalize('NFD')
        .split('')
        .filter(isNotGrave)
        .join('')
        .normalize('NFC');
}

var acute = String.fromCharCode(769);
function addAcute (character) {
    if (character === void 0) { character = ''; }
    return character.concat(acute).normalize('NFC');
}

function replaceCharacter(characters, index) {
    return (characters.substr(0, index) +
        addAcute(characters[index]) +
        characters.substr(index + 1));
}
function accentuateLastVowel(characters) {
    characters = characters.normalize('NFC'); // necessary?
    for (var x = characters.length - 1; x > -1; x--) {
        if (isVowel(characters[x])) {
            characters = replaceCharacter(characters, x);
            return characters;
        }
    }
    return characters;
}

var circumflex = String.fromCharCode(834);
function isCircumflex(character) {
    return character === circumflex;
}
function containsCircumflex (characters) {
    if (characters === void 0) { characters = ''; }
    return characters.normalize('NFD').split('').some(isCircumflex);
}

function accentuateAntepenult(syllables) {
    syllables[syllables.length - 3] = accentuateLastVowel(syllables[syllables.length - 3] || '');
    return syllables;
}
function accentuatePenult(syllables) {
    syllables[syllables.length - 2] = accentuateLastVowel(syllables[syllables.length - 2] || '');
    return syllables;
}
function accentuateUltima(syllables) {
    syllables[syllables.length - 1] = accentuateLastVowel(syllables[syllables.length - 1] || '');
    return syllables;
}
function accentuateVerb(word) {
    word = removeAcutes(removeGraves(word));
    var syllables = syllabify(word);
    // let antepenult = syllables[syllables.length - 3];
    var penult = syllables[syllables.length - 2] || '';
    var ultima = syllables[syllables.length - 1] || '';
    // if circumflex is on the ultima, then acute was absorbed from penultima
    if (containsCircumflex(ultima)) {
        return word;
    }
    if (syllables.length > 1) {
        if (isLongSyllable(ultima)) {
            syllables = accentuatePenult(syllables);
        }
        else {
            if (syllables.length > 2) {
                syllables = accentuateAntepenult(syllables);
            }
            else {
                // "The acute may not stand on a long penult when the
                // ultima is short: δούλου, but δοῦλος." (Black)
                if (isLongSyllable(ultima)) {
                    syllables = accentuatePenult(syllables);
                }
                else if (!isLongSyllable(penult)) {
                    syllables = accentuatePenult(syllables);
                }
            }
        }
    }
    else {
        syllables = accentuateUltima(syllables);
    }
    return syllables.join('').normalize('NFC');
}
// John 9:40-41 has it all...
/*
oxytone
  words 'born' with accent on ultima

paroxytone
  words 'born' with accent on penultima

proparoxytone
  words 'born' with accent on antepenultima
*/

function amalgamate(characters) {
    // Labials
    // "π, β, φ + σ form the double consonant ψ" (Black)
    characters = characters.replace(/[πβφ]σ/g, 'ψ');
    // Velars
    // "κ, γ, χ + σ form the double consonant ξ." (Black)
    characters = characters.replace(/[κγχ]σ/g, 'ξ');
    // Dentals
    // "τ, δ, θ drop out before σ" (Black)
    characters = characters.replace(/[τδθ]σ/g, 'σ');
    return characters;
}

exports.accentuateVerb = accentuateVerb;
exports.amalgamate = amalgamate;
exports.syllabify = syllabify;
//# sourceMappingURL=index.js.map
