var verbs = require("../lib/verbs");
var assert = require("assert");
var glob = require("glob");
var fs = require("fs");
var progress = require("progress");

fs.writeFile(__dirname + "/misses/presentActiveIndicatives.txt", "");
fs.writeFile(__dirname + "/misses/futureActiveIndicatives.txt", "");
fs.writeFile(__dirname + "/misses/imperfectActiveIndicatives.txt", "");

function eachChapterFile(callback) {
  var files = glob.sync("node_modules/aaronshaf-bible-data/greek/sblgnt/json/*/*.json");
  files.forEach(function(file) {
    callback(file);
  });
}

var words = 0;
function eachWordInFile(file,callback) {
  var data = JSON.parse(fs.readFileSync(file,"utf8"));
  data.verses.forEach(function(verse) {
    verse.forEach(function(word) {
      var partOfSpeech = word[0];
      var parseCode = word[1];
      words++;
      if(partOfSpeech === "V-"
          // && parseCode[1] === "P"
          && parseCode[2] === "A"
          && parseCode[3] === "I") {
        callback(word);
      }
    });
  });
}

var coverage = {
  "presentActiveIndicatives": {
    "matches": 0,
    "total": 0
  },
  "futureActiveIndicatives": {
    "matches": 0,
    "total": 0
  },
  "imperfectActiveIndicatives": {
    "matches": 0,
    "total": 0
  }
}

var misses = [];
// var bar = new progress(":bar", { total: 10 });

eachChapterFile(function(file) {
  eachWordInFile(file,function(word) {
    var person = word[1][0];
    var principleParts = { "1": word[5] };
    var normalizedWord = word[4];
    var number = word[1][5] === "S" ? "singular" : "plural";
    var verbStem = principleParts["1"].substr(0,principleParts["1"].length - 1); // LAME

    if(word[1].substr(1,3) === "PAI") {
      coverage["presentActiveIndicatives"]["total"]++;
      var presentActiveIndicativesResult = verbs.presentActiveIndicatives(verbStem);
      if(presentActiveIndicativesResult[number][person] === normalizedWord) {
        coverage["presentActiveIndicatives"]["matches"]++;
      } else {
        fs.appendFileSync(__dirname + "/misses/presentActiveIndicatives.txt", word[1] + " sblgnt: " + normalizedWord + ", koine-lexer:" + presentActiveIndicativesResult[number][person] +"\n");
      }
    } else if(word[1].substr(1,3) === "FAI") {
    coverage["futureActiveIndicatives"]["total"]++;
      var futureActiveIndicativesResult = verbs.futureActiveIndicatives(verbStem);
      if(futureActiveIndicativesResult[number][person] === normalizedWord) {
        coverage["futureActiveIndicatives"]["matches"]++;
      } else {
        fs.appendFileSync(__dirname + "/misses/futureActiveIndicatives.txt", word[1] + " sblgnt: " + normalizedWord + ", koine-lexer:" + futureActiveIndicativesResult[number][person] +"\n");
      }
    } else if(word[1].substr(1,3) === "IAI") {
    coverage["imperfectActiveIndicatives"]["total"]++;
      var imperfectActiveIndicativesResult = verbs.imperfectActiveIndicatives(verbStem);
      if(imperfectActiveIndicativesResult[number][person] === normalizedWord) {
        coverage["imperfectActiveIndicatives"]["matches"]++;
      } else {
        fs.appendFileSync(__dirname + "/misses/imperfectActiveIndicatives.txt", word[1] + " sblgnt: " + normalizedWord + ", koine-lexer:" + imperfectActiveIndicativesResult[number][person] +"\n");
      }
    }
  });
});

console.log(JSON.stringify(coverage,null,2));
