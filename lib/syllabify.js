var utils = require('./utils');
var unorm = require('unorm');
var _ = require('lodash');

function syllabify(word) {
  var syllables = [];
  var currentSyllable = '';
  var charactersRemaining = unorm.nfc(word);
  var cluster;

  function advanceSyllable() {
    if(currentSyllable.length) {
      syllables.push(currentSyllable);  
      currentSyllable = '';
    }
  };

  function shiftCharacter() {
    currentSyllable += charactersRemaining[0];
    charactersRemaining = charactersRemaining.substr(1);
  }

  // var wordWithoutAccents = utils.withoutAccents(word);
  
  while(charactersRemaining.length) {
    if(utils.isSingleConsonant(word)) {
      shiftCharacter();
      continue;
    }

    if(cluster = utils.beginsWithConsonantClusterPronouncedTogether(charactersRemaining)) {
      if(currentSyllable.length) {
        advanceSyllable();
      }
      currentSyllable += cluster;
      charactersRemaining = charactersRemaining.substr(cluster.length);
      continue;
    }

    if(utils.beginsWithSingleConsonantFollowedByVowel(charactersRemaining)) {
      // console.log('beginsWithSingleConsonantFollowedByVowel',charactersRemaining);
      if(currentSyllable.length) {
        advanceSyllable();
      }
      shiftCharacter();
      continue;
    }

    if(utils.beginsWithDoubleConsonant(charactersRemaining)) {
      // console.log('beginsWithDoubleConsonant',charactersRemaining);
      shiftCharacter();
      advanceSyllable();
      continue;
    }

    if(utils.beginsWithConsonant(charactersRemaining)) {
      // console.log('beginsWithConsonant',charactersRemaining);
      shiftCharacter();
      continue;
    }

    if(utils.beginsWithDiphthong(charactersRemaining)) {
      // console.log('beginsWithDiphthong',charactersRemaining);
      currentSyllable += charactersRemaining[0] + charactersRemaining[1];
      charactersRemaining = charactersRemaining.substr(2);
      continue;
    }

    if(utils.beginsWithVowelFollowedByVowel(charactersRemaining)) {
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

function extractConsonantClustersPronouncedTogether(text) {
  var consonantClusters = [];
  var words = utils.removeNumbers(utils.removePunctuation(text.toLowerCase())).split(' ');
  // console.log(words);
  words.forEach(function(word) {
   var characters = word.split('');
   var consonantCluster = [];
   while(characters.length && utils.isConsonant(characters[0])) {
     consonantCluster.push(characters.shift());
   }
   if(consonantCluster.length > 1) {
    consonantClusters.push(consonantCluster.join('')); 
   }
  });
  return _.unique(consonantClusters);
}

module.exports = syllabify;
module.exports.extractConsonantClustersPronouncedTogether = extractConsonantClustersPronouncedTogether;