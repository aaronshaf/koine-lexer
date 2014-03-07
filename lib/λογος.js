var nouns = require('./nouns');
var verbs = require('./verbs');

function word(input) {
  var word = {
    principleParts: {
      1: input
      // 2: '',
      // 3: '',
      // 4: '',
      // 5: '',
      // 6: ''
    }
  };
  word.stem = verbs.stem(word);
  word.indicatives = {
    present: {
      active: verbs.presentActiveIndicatives(word.stem)
    },
    middleAndPassive: {

    },
    future: {
      active: verbs.futureActiveIndicatives(word.stem),
      middle: verbs.futureMiddleIndicatives(word.stem),
    }
  };

  return word;
};

module.exports = word;