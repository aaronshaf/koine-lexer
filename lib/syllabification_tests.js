var assert = require("assert");
var syllabification = require('./syllabification');

describe('syllabification', function() {
  describe('breakIntoSyllables()', function(){
    var syllablesOfWords = {
      // examples taken from https://www.teknia.com/greekalphabet/greek-punctuation-syllabification
      'ἀκηκόαμεν': ['ἀ','κη','κό','α','μεν'],
      'μαρτυροῦμεν': ['μαρ','τυ','ροῦ','μεν'],
      'ἑωράκαμεν': ['ἑ','ω','ρά','κα','μεν'],
      'ἐθεασάμεθα': ['ἐ','θε','α','σά','με','θα'],
      'ἔμπροσθεν': ['ἔμ','προ','σθεν'],
      'ἀρχῆς': ['ἀρ','χῆς'],
      'Χριστός': ['Χρι','στός'],
      'γραφή': ['γρα','φή'],
      'ἔθνεσιν': ['ἔ','θνε','σιν'],
      'ἀπαγγέλλομεν': ['ἀ','παγ','γέλ','λο','μεν'],
      'ἀντιχριστός': ['ἀντι','χριστός'],
      'ἐκβάλλω': ['ἐκ','βάλλω']
    };

    for(word in syllablesOfWords) {
      it('should return correct syllables for ' + word, function() {
        var syllables = syllabification.breakIntoSyllables(word);
        assert.deepEqual(syllables, syllablesOfWords[word]);
      });      
    }
  });
});