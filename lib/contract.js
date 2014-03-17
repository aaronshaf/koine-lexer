// Rules from Black (133-134)
const substitutions = {
  // "α + E-sound (ε or η) = α"
  "α[εη]": "α",

  // "α + O sound (ο, ω, or ου) = ω"
  "α[οω]": "ω",
  "αου": "ω",

  // "α + any combination with ι = ᾳ"
  "α[αειουηω]ι": "ᾳ",

  // "ε + ε = ει"
  "εε": "ει",

  // "ε + ο = ου"
  "εο": "ου",

  // "ε before any long vowel or diphthong drops out"
  // "ε[ηω]"

  // "ο + long vowel = ω"
  "ο[ηω]": "ω",

  // "ο + short vowel or ου = ου"
  "ο[αειου]": "ου",
  "οου": "ου"

  // "ο + any combination with ι = οι"
  "ο[αεου]ι": "οι"
};

function contract(characters) {

}

module.exports = contract;


// See also: http://www.biblicalgreek.org/grammar/images/pcontracts.pdf
