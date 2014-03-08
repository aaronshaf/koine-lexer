var utils = require("./utils");

function breakIntoSyllables(word) {
  var wordWithoutAccents = utils.withoutAccents(word);
  
}

exports.breakIntoSyllables = breakIntoSyllables;