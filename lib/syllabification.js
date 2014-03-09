var utils = require('./utils');
var _ = require('lodash');

const consonantClustersPronouncedTogether = [
  "βλ",
  "βρ",
  "γλ",
  "γν",
  "γρ",
  "δρ",
  "θλ",
  "θρ",
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
  "σχ",
  "τρ",
  "φθ",
  "φλ",
  "φρ",
  "χρ"
];

function isDoubleConsonant(twoCharacters) {

}

function breakIntoSyllables(word) {
  var syllables = [];
  var currentSyllable = '';
  word = unorm.nfc(word);



  // var wordWithoutAccents = utils.withoutAccents(word);
  
  while(word.length) {
    if(utils.isConsonant(word[0])) {

    }

    // consonantClustersPronouncedTogether



  }
}

function extractConsonantClustersPronouncedTogether(text) {
  var consonantClusters = [];
  var words = utils.removeNumbers(utils.removePunctuation(text.toLowerCase())).split(' ');
  console.log(words);
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

exports.breakIntoSyllables = breakIntoSyllables;
exports.extractConsonantClustersPronouncedTogether = extractConsonantClustersPronouncedTogether;