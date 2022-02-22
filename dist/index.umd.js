/*!
 * koine-lexer v3.0.3
 * (c) Aaron Shafovaloff
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.koineLexer = {}));
})(this, (function (exports) { 'use strict';

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

  exports.amalgamate = amalgamate;
  exports.syllabify = syllabify;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
