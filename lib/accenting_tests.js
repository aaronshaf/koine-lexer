var assert = require("assert");
var accenting = require('./accenting');

describe('accenting', function(){
  describe('breakIntoSyllables()', function(){
    var syllablesOfWords = {
      'ὁμολογῶ': ['ὁ','μο','λο','γῶ'],
      'καθαρίζει': ['κα','θαρ','ίζ','ει'],
      'ἀδικία': ['ἀ','δι','κί','α'],
      'μαρτυρεῖτε': ['μαρ','τυ','ρεῖ','τε']
    };

    for(word in syllablesOfWords) {
      it('should return correct syllables for ' + word, function() {
        var syllables = accenting.breakIntoSyllables(word);
        assert.deepEqual(syllables, syllablesOfWords[word]);
      });      
    }
  });
});