import type { Syllable, ConsonantCluster } from '../phonology';
import {
  isSingleConsonant,
  beginsWithConsonantClusterPronouncedTogether,
  beginsWithConsonant,
  beginsWithVowelFollowedByVowel,
  beginsWithSingleConsonantFollowedByVowel,
  isConsonant,
  beginsWithDoubleConsonant,
  beginsWithVowel,
  removeNumbers,
  beginsWithDiphthong,
  removePunctuation,
} from './utils';

function syllabify(word: string = '') {
  let syllables: Syllable[] = [];
  let currentSyllable = '';
  let charactersRemaining: string = word.normalize('NFC');
  let cluster;

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

    if (
      (cluster =
        beginsWithConsonantClusterPronouncedTogether(charactersRemaining))
    ) {
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

function extractConsonantClustersPronouncedTogether(text: string) {
  let consonantClusters: ConsonantCluster[] = [];
  let words = removeNumbers(removePunctuation(text.toLowerCase())).split(' ');
  // console.log(words);
  words.forEach(function (word: string) {
    let characters = word.split('');
    let consonantCluster = [];
    while (characters[0] && isConsonant(characters[0])) {
      consonantCluster.push(characters.shift());
    }
    if (consonantCluster.length > 1) {
      consonantClusters.push(consonantCluster.join(''));
    }
  });
  return Array.from(new Set(consonantClusters));
}

export { syllabify, extractConsonantClustersPronouncedTogether };
