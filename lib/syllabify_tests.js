var assert = require("assert");
var syllabify = require('./syllabify');

describe('syllabify()', function() {
  var syllablesOfWords = {
    'καὶ': ['καὶ'],
    'ἀκούσαντες': ['ἀ','κού','σαν','τες'],
    'δοῦλος': ['δοῦ','λος'],
    'ἄνθρωπος': ['ἄν','θρω','πος'],
    'ἀλήθεια': ['ἀ','λή','θει','α'], // broken

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
    'ἀντιχριστός': ['ἀν','τι','χρι','στός'],
    'ἐκβάλλω': ['ἐκ','βάλ','λω']
  };

  function testWord(word,correctSyllables) {
    it('should return correct syllables for ' + word, function() {
      var resultSyllables = syllabify(word);
      assert.deepEqual(correctSyllables,resultSyllables);
    });
  }

  for(var word in syllablesOfWords) {
    testWord(word,syllablesOfWords[word]);
  }
});