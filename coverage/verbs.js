const verbs = require('../lib/verbs');
const glob = require('glob');
const fs = require('fs');
const mkdirp = require('mkdirp');
// const progress = require("progress");

mkdirp.sync(__dirname + '/misses/');

fs.writeFileSync(__dirname + '/misses/presentActiveIndicatives.txt', '');
fs.writeFileSync(__dirname + '/misses/futureActiveIndicatives.txt', '');
fs.writeFileSync(__dirname + '/misses/imperfectActiveIndicatives.txt', '');

function eachChapterFile(callback) {
  const files = glob.sync(
    'node_modules/aaronshaf-bible-data/greek/sblgnt/json/*/*.json',
  );
  files.forEach(function (file) {
    callback(file);
  });
}

let words = 0;
function eachWordInFile(file, callback) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.verses.forEach(function (verse) {
    verse.forEach(function (word) {
      const partOfSpeech = word[0];
      const parseCode = word[1];
      words++;
      if (
        partOfSpeech === 'V-' &&
        // && parseCode[1] === "P"
        parseCode[2] === 'A' &&
        parseCode[3] === 'I'
      ) {
        callback(word);
      }
    });
  });
}

const coverage = {
  presentActiveIndicatives: {
    matches: 0,
    total: 0,
  },
  futureActiveIndicatives: {
    matches: 0,
    total: 0,
  },
  imperfectActiveIndicatives: {
    matches: 0,
    total: 0,
  },
};

const misses = [];
// const bar = new progress(":bar", { total: 10 });

eachChapterFile(function (file) {
  eachWordInFile(file, function (word) {
    const person = word[1][0];
    const principleParts = { 1: word[5] };
    const normalizedWord = word[4];
    const number = word[1][5] === 'S' ? 'singular' : 'plural';
    const verbStem = principleParts['1'].substr(
      0,
      principleParts['1'].length - 1,
    ); // LAME

    if (word[1].substr(1, 3) === 'PAI') {
      coverage['presentActiveIndicatives']['total']++;
      const presentActiveIndicativesResult =
        verbs.presentActiveIndicatives(verbStem);
      if (presentActiveIndicativesResult[number][person] === normalizedWord) {
        coverage['presentActiveIndicatives']['matches']++;
      } else {
        fs.appendFileSync(
          __dirname + '/misses/presentActiveIndicatives.txt',
          word[1] +
            ' lemma: ' +
            principleParts['1'] +
            ', sblgnt: ' +
            normalizedWord +
            ', koine-lexer:' +
            presentActiveIndicativesResult[number][person] +
            '\n',
        );
      }
    } else if (word[1].substr(1, 3) === 'FAI') {
      coverage['futureActiveIndicatives']['total']++;
      const futureActiveIndicativesResult =
        verbs.futureActiveIndicatives(verbStem);
      if (futureActiveIndicativesResult[number][person] === normalizedWord) {
        coverage['futureActiveIndicatives']['matches']++;
      } else {
        fs.appendFileSync(
          __dirname + '/misses/futureActiveIndicatives.txt',
          word[1] +
            ' lemma: ' +
            principleParts['1'] +
            ', sblgnt: ' +
            normalizedWord +
            ', koine-lexer:' +
            futureActiveIndicativesResult[number][person] +
            '\n',
        );
      }
    } else if (word[1].substr(1, 3) === 'IAI') {
      coverage['imperfectActiveIndicatives']['total']++;
      const imperfectActiveIndicativesResult =
        verbs.imperfectActiveIndicatives(verbStem);
      if (imperfectActiveIndicativesResult[number][person] === normalizedWord) {
        coverage['imperfectActiveIndicatives']['matches']++;
      } else {
        fs.appendFileSync(
          __dirname + '/misses/imperfectActiveIndicatives.txt',
          word[1] +
            ' lemma: ' +
            principleParts['1'] +
            ', sblgnt: ' +
            normalizedWord +
            ', koine-lexer:' +
            imperfectActiveIndicativesResult[number][person] +
            '\n',
        );
      }
    }
  });
});

console.log(JSON.stringify(coverage, null, 2));
