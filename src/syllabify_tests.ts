import assert from 'assert';
import { syllabify } from './syllabify';

const syllablesOfWords: { [word: string]: string[] } = {
  καὶ: ['καὶ'],
  ἀκούσαντες: ['ἀ', 'κού', 'σαν', 'τες'],
  δοῦλος: ['δοῦ', 'λος'],
  ἄνθρωπος: ['ἄν', 'θρω', 'πος'],
  ἀλήθεια: ['ἀ', 'λή', 'θει', 'α'], // broken
  ποιοῦμεν: ['ποι', 'οῦ', 'μεν'], // broken

  // examples taken from https://www.teknia.com/greekalphabet/greek-punctuation-syllabification
  ἀκηκόαμεν: ['ἀ', 'κη', 'κό', 'α', 'μεν'],
  μαρτυροῦμεν: ['μαρ', 'τυ', 'ροῦ', 'μεν'],
  ἑωράκαμεν: ['ἑ', 'ω', 'ρά', 'κα', 'μεν'],
  ἐθεασάμεθα: ['ἐ', 'θε', 'α', 'σά', 'με', 'θα'],
  ἔμπροσθεν: ['ἔμ', 'προ', 'σθεν'],
  ἀρχῆς: ['ἀρ', 'χῆς'],
  Χριστός: ['Χρι', 'στός'],
  γραφή: ['γρα', 'φή'],
  ἔθνεσιν: ['ἔ', 'θνε', 'σιν'],
  ἀπαγγέλλομεν: ['ἀ', 'παγ', 'γέλ', 'λο', 'μεν'],
  ἀντιχριστός: ['ἀν', 'τι', 'χρι', 'στός'],
  ἐκβάλλω: ['ἐκ', 'βάλ', 'λω'],
};

describe('syllabify()', function () {
  it('should correctly syllabify words', function () {
    for (const word in syllablesOfWords) {
      const resultSyllables = syllabify(word);
      assert.deepStrictEqual(syllablesOfWords[word], resultSyllables);
    }
  });
});
