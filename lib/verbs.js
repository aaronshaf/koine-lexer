var accentuation = require("./accentuation");
var accentuateVerb = accentuation.accentuateVerb;

// Morpheme slots

// Prefix

// Past
const pastTimeMorpheme = "ἐ";

// Perfective
const perfectiveMorpheme = "λε";

// Lexical

// Passive
const passiveMorpheme = "θη";

// Future
const futureMorpheme = "σ"

// Aspect
// Connecting vowel
// const neturalMorpheme = "ο" or "ε"
const aoristicAspectMorpheme = "σα";
const perfectiveAspectMorpheme = "κα";

// Final (person-number)
const primarySuffixes = {
  "singular": {
    1: "ω",
    2: "εις",
    3: "ει"
  },
  "plural": {
    1: "ομεν",
    2: "ετε",
    3: "ουσι"
  }
};
const secondarySuffixes = {
  "singular": {
    1: "ν",
    2: "ς",
    3: "" // movable ν
  },
  "plural": {
    1: "μεν",
    2: "τε",
    3: "v" // or σαν
  }
};

const presentSubjunctiveEndings = {
  "singular": {
    1: "ω",
    2: "ῃς",
    3: "ῃ"
  },
  "plural": {
    1: "ωμεν",
    2: "ητε",
    3: "ωσι"
  }
};

const middleAndPassiveEndings = {
  "singular": {
    1: "ομαι",
    2: "ῃ",
    3: "εται"
  },
  "plural": {
    1: "όμεθα",
    2: "εσθε",
    3: "ονται"
  }
};

const imperfectEndings = {
  "singular": {
    1: "ον",
    2: "ες",
    3: "ε"
  },
  "plural": {
    1: "ομεν",
    2: "ετε",
    3: "ον"
  }
};

const imperativeMorphemes = {
  // to do
};

// aka "past time morpheme"
function augmentize(word) {
  // TODO: account for
    // syllabic augment
    // temporal augment
    // zero augment

  return pastTimeMorpheme + word;
}

// "repetition of the initial consonant of the verb stem plus the vowel ε" (Black)
function reduplicate(morpheme) {

}

function amalgamize() {

}

function hasPrepositionalPrefix(word) {
  // κατα
  // other prepositional prefixes?
}

function presentActiveIndicatives(stem) {
  return {
    "singular": {
      1: stem + primarySuffixes.singular[1],
      2: stem + primarySuffixes.singular[2],
      3: stem + primarySuffixes.singular[3]
    },
    "plural": {
      1: stem + primarySuffixes.plural[1],
      2: stem + primarySuffixes.plural[2],
      3: stem + primarySuffixes.plural[3]
    }
  };
};

function middleAndPassiveIndicatives(stem) {
  return {
    "singular": {
      1: stem + middleAndPassiveEndings.singular[1],
      2: stem + middleAndPassiveEndings.singular[2],
      3: stem + middleAndPassiveEndings.singular[3]
    },
    "plural": {
      1: stem + middleAndPassiveEndings.plural[1],
      2: stem + middleAndPassiveEndings.plural[2],
      3: stem + middleAndPassiveEndings.plural[3]
    }
  };
}

function imperfectActiveIndicatives(stem) {
  const augmentedStem = pastTimeMorpheme + stem;
  return {
    "singular": {
      1: accentuateVerb(augmentedStem + imperfectEndings.singular[1]),
      2: accentuateVerb(augmentedStem + imperfectEndings.singular[2]),
      3: accentuateVerb(augmentedStem + imperfectEndings.singular[3])
    },
    "plural": {
      1: accentuateVerb(augmentedStem + imperfectEndings.plural[1]),
      2: accentuateVerb(augmentedStem + imperfectEndings.plural[2]),
      3: accentuateVerb(augmentedStem + imperfectEndings.plural[3])
    }
  };
}

function presentActiveSubjunctives(stem) {
  return {
    "singular": {
      1: stem + presentSubjunctiveEndings.singular[1],
      2: stem + presentSubjunctiveEndings.singular[2],
      3: stem + presentSubjunctiveEndings.singular[3]
    },
    "plural": {
      1: stem + presentSubjunctiveEndings.plural[1],
      2: stem + presentSubjunctiveEndings.plural[2],
      3: stem + presentSubjunctiveEndings.plural[3]
    }
  };
};

function middleAndPassiveSubjunctives(stem) {
  return {
    "singular": {
      1: stem + presentSubjunctiveEndings.singular[1],
      2: stem + presentSubjunctiveEndings.singular[2],
      3: stem + presentSubjunctiveEndings.singular[3]
    },
    "plural": {
      1: stem + presentSubjunctiveEndings.plural[1],
      2: stem + presentSubjunctiveEndings.plural[2],
      3: stem + presentSubjunctiveEndings.plural[3]
    }
  };
};

function futureActiveIndicatives(stem) {
  return {
    "singular": {
      1: stem + futureMorpheme + primarySuffixes.singular[1],
      2: stem + futureMorpheme + primarySuffixes.singular[2],
      3: stem + futureMorpheme + primarySuffixes.singular[3]
    },
    "plural": {
      1: stem + futureMorpheme + primarySuffixes.plural[1],
      2: stem + futureMorpheme + primarySuffixes.plural[2],
      3: stem + futureMorpheme + primarySuffixes.plural[3]
    }
  };
};

// middleAndPassiveEndings

function futureMiddleIndicatives(stem) {
  return {
    "singular": {
      1: stem + futureMorpheme + middleAndPassiveEndings.singular[1],
      2: stem + futureMorpheme + middleAndPassiveEndings.singular[2],
      3: stem + futureMorpheme + middleAndPassiveEndings.singular[3]
    },
    "plural": {
      1: stem + futureMorpheme + middleAndPassiveEndings.plural[1],
      2: stem + futureMorpheme + middleAndPassiveEndings.plural[2],
      3: stem + futureMorpheme + middleAndPassiveEndings.plural[3]
    }
  };
}

function stem(word) {
  if(word.principleParts[1]) {
    return word.principleParts[1].substr(0,word.principleParts[1].length - 1);
  }
  return null;
}

exports.primarySuffixes = primarySuffixes;
exports.middleAndPassiveEndings = middleAndPassiveEndings;
exports.presentActiveIndicatives = presentActiveIndicatives;
exports.presentActiveSubjunctives = presentActiveSubjunctives;
exports.imperfectActiveIndicatives = imperfectActiveIndicatives;
exports.futureActiveIndicatives = futureActiveIndicatives;
exports.futureMiddleIndicatives = futureMiddleIndicatives;
exports.augmentize = augmentize;
exports.stem = stem;
