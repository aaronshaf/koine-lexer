var assert = require("assert");
var contract = require("./contract");

describe("contract()", function() {
  var contractions = {
    // Examples from Black (133-134)
    "τιμαετε": "τιμᾶτε",
    "τιμαομεν": "τιμῶμεν",
    "τιμαει": "τιμᾷ",
    "φιλεετε": "φιλεῖτε",
    "φιλεομεν": "φιλοῦμεν",
    "φιλεει": "φιλεῖ",
    "δηλοω": "δηλῶ",
    "δηλοομεν": "δηλοῦμεν",

    // Examples from http://www.biblicalgreek.org/grammar/images/pcontracts.pdf
    // "ποιεομεν": "ποιοῦμεν",
    // "πληροετε": "πληροῦτε",
    // "ποιεετε": "ποῖετε",
    // "ἀγαπαομεν": "ἀγαπῶμεν",
  };

  it("should correctly contract vowels", function() {
    for(var word in contractions) {
      var resultContraction = contract(word);
      assert.deepEqual(contractions[word],resultContraction);
    }
  });
});
