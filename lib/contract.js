var unorm = require("unorm");
const addCircumflex = require('./utils/add_circumflex');

// Rules based on D.A. Black's "Learn to Read New Testament Greek" (3rd ed, 133-134)

const substitutions = {
  // "ε + ο = ου"
  "εο": "οῦ",

  // "ε before any long vowel or diphthong drops out"
  "ε([ηω]|ει|ου|ευ|αι|υι|αυ|οι)": function(match,p1){
    p1 = unorm.nfc(p1);
    var upToLastCharacter = p1.substr(0,p1.length-1);
    var lastCharacter = addCircumflex(p1.substr(-1));
    return upToLastCharacter + lastCharacter;
  },

  // "ε + ε = ει"
  "εε": "εῖ",

  // "α + any combination with ι = ᾳ"
  "α[αειουηω]ι": "ᾷ",

  // "α + E-sound (ε or η) = α"
  "α[εη]": "ᾶ",

  // "α + O sound (ο, ω, or ου) = ω"
  "α[οω]": "ῶ",
  "αου": "ῶ",

  // "ο + long vowel = ω"
  "ο[ηω]": "ῶ",

  // "ο + short vowel or ου = ου"
  "ο[αειου]": "οῦ",
  "οου": "οῦ",

  // "ο + any combination with ι = οι"
  "ο[αεου]ι": "οῖ"
};

module.exports = function(characters) {
  for(var pattern in substitutions) {
    if(characters.match(new RegExp(pattern,"g"))) {
      return characters.replace(new RegExp(pattern,"g"),substitutions[pattern]);
    }
  }
  return characters;
}

// See also: http://www.biblicalgreek.org/grammar/images/pcontracts.pdf
