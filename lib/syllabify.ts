import { Syllable, ConsonantCluster } from "../phonology";
import unorm from "unorm";
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
} from "./utils";
import { uniq } from "lodash";

function syllabify(word: string) {
  var syllables: Syllable[] = [];
  var currentSyllable = "";
  var charactersRemaining = unorm.nfc(word);
  var cluster;

  function advanceSyllable() {
    if (currentSyllable.length) {
      syllables.push(currentSyllable);
      currentSyllable = "";
    }
  }

  function shiftCharacter() {
    currentSyllable += charactersRemaining[0];
    charactersRemaining = charactersRemaining.substr(1);
  }

  // var wordWithoutAccents = withoutAccents(word);

  while (charactersRemaining.length) {
    if (isSingleConsonant(word)) {
      shiftCharacter();
      continue;
    }

    if (
      (cluster = beginsWithConsonantClusterPronouncedTogether(
        charactersRemaining
      ))
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
      // console.log('beginsWithConsonant',charactersRemaining);
      shiftCharacter();
      continue;
    }

    if (beginsWithDiphthong(charactersRemaining)) {
      // console.log('beginsWithDiphthong',charactersRemaining);
      currentSyllable += charactersRemaining[0] + charactersRemaining[1];
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
  var consonantClusters: ConsonantCluster[] = [];
  var words = removeNumbers(removePunctuation(text.toLowerCase())).split(" ");
  // console.log(words);
  words.forEach(function (word: string) {
    var characters = word.split("");
    var consonantCluster = [];
    while (characters.length && isConsonant(characters[0])) {
      consonantCluster.push(characters.shift());
    }
    if (consonantCluster.length > 1) {
      consonantClusters.push(consonantCluster.join(""));
    }
  });
  return uniq(consonantClusters);
}

export { syllabify, extractConsonantClustersPronouncedTogether };
