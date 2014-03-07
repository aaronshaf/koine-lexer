(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var λογος = require('../lib/λογος');

window.ApplicationController = function($scope) {
	$scope.query = 'ὁμολογέω';

	$scope.persons = ['1','2','3'];
	$scope.tenses = ['present','imperfect','future','aorist','perfect','pluperfect'];
	$scope.voices = ['active','middle','passive'];
	$scope.moods = ['indicative','subjunctive','optative','imperative','infinitive','participle'];
	$scope.cases = ['nominative','genitive','dative','accusative','vocative'];
	$scope.genders = ['masculine','feminine','neuter'];
	$scope.numbers = ['singular','plural'];
	$scope.degrees = ['comparative','superlative'];

	$scope.$watch('query', function(newValue, oldValue) {
		$scope.word = λογος($scope.query);
		$scope.wordJSON = JSON.stringify($scope.word,null,2);
		console.log($scope.word);
	});
}
},{"../lib/λογος":4}],2:[function(require,module,exports){
var firstDeclensionSuffixes = {
  'plural': {
    'nominative': 'αι',
    'genitive': 'ων',
    'dative': 'αις',
    'accusative': 'ας'
  }
};

var secondDeclensionSingularSuffixes = {
  'masculine': {
    'nominative': 'ος',
    'genitive': 'ου',
    'dative': 'ῳ',
    'accusative': 'ον',
    'vocative': 'ε'
  },
  'neuter': {
    'nominative': 'ον',
    'genitive': 'ου',
    'dative': 'ῳ',
    'accusative': 'ον',
    'vocative': 'ον'
  }
};

var secondDeclensionPluralSuffixes = {
  'masculine': {
    'nominative': 'οι',
    'genitive': 'ων',
    'dative': 'οις',
    'accusative': 'ους'
  },
  'neuter': {
    'nominative': 'α',
    'genitive': 'ων',
    'dative': 'οις',
    'accusative': 'α'
  }
};

/*
Omitting names and compound forms, there are 595 second declension nouns in the New 
Testament, 347 of which are masculine and follow the declension ἄνθρωπος, and 196 of which 
are neuter and follow the declension of δῶρον. There are also several feminine nouns of the 
second declension. These nouns follow the declension of ἄνθρωπος but use the feminine 
definite article (e.g., ἡ ὁδός, “the way”; see John 14:6). Some second declension nouns are 
irregular in their formation.

Black, D. A. (2009). Learn to read New Testament Greek (3rd ed) (29). Nashville, TN: B&H 
Publishing Group.
*/

/*
If the stem of a word ends in the phonemes ε, ι, or ρ, then the α of the nominative singular 
is retained throughout the declension (as in ἡμέρα). If the stem of a word ends in a sibilant 
phoneme (ζ, σ, or a double letter containing σ, i.e., ξ, or ψ), then the α of the nominative 
singular lengthens to -ης and -ῃ in the genitive and dative singular (as in δόξα). If the 
stem of a word ends in a phoneme other than ε, ι, ρ, or a sibilant, then the η in the 
nominative singular is retained throughout the singular (as in φωνή).

Black, D. A. (2009). Learn to read New Testament Greek (3rd ed) (36). Nashville, TN: B&H 
Publishing Group.
*/
},{}],3:[function(require,module,exports){
const pastTimeMorpheme = 'ἐ';
const aoristicAspectMorpheme = 'σα';
const perfectiveAspectMorpheme = 'κα';

/*
morpheme slots
  prefix
  past
  perfective
  lexical
  passive
  future
  aspect
  final
*/

const primaryEndings = {
  'singular': {
    1: 'ω',
    2: 'εις',
    3: 'ει'
  },
  'plural': {
    1: 'ομεν',
    2: 'ετε',
    3: 'ουσι'
  }
};

const presentSubjunctiveEndings = {
  'singular': {
    1: 'ω',
    2: 'ῃς',
    3: 'ῃ'
  },
  'plural': {
    1: 'ωμεν',
    2: 'ητε',
    3: 'ωσι'
  }
};

const middleAndPassiveEndings = {
  'singular': {
    1: 'ομαι',
    2: 'ῃ',
    3: 'εται'
  },
  'plural': {
    1: 'όμεθα',
    2: 'εσθε',
    3: 'ονται'
  }
};

const imperfectEndings = {
  'singular': {
    1: 'ον',
    2: 'ες',
    3: 'ε'
  },
  'plural': {
    1: 'ομεν',
    2: 'ετε',
    3: 'ον'
  }
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
    'singular': {
      1: stem + primaryEndings.singular[1],
      2: stem + primaryEndings.singular[2],
      3: stem + primaryEndings.singular[3]
    },
    'plural': {
      1: stem + primaryEndings.plural[1],
      2: stem + primaryEndings.plural[2],
      3: stem + primaryEndings.plural[3]
    }
  };
};

function middleAndPassiveIndicatives(stem) {
  return {
    'singular': {
      1: stem + middleAndPassiveEndings.singular[1],
      2: stem + middleAndPassiveEndings.singular[2],
      3: stem + middleAndPassiveEndings.singular[3]
    },
    'plural': {
      1: stem + middleAndPassiveEndings.plural[1],
      2: stem + middleAndPassiveEndings.plural[2],
      3: stem + middleAndPassiveEndings.plural[3]
    }
  };
}

function imperfectActiveIndicatives(stem) {
  const augmentedStem = pastTimeMorpheme + stem; 
  return {
    'singular': {
      1: augmentedStem + imperfectEndings.singular[1],
      2: augmentedStem + imperfectEndings.singular[2],
      3: augmentedStem + imperfectEndings.singular[3]
    },
    'plural': {
      1: augmentedStem + imperfectEndings.plural[1],
      2: augmentedStem + imperfectEndings.plural[2],
      3: augmentedStem + imperfectEndings.plural[3]
    }
  };
}

function presentActiveSubjunctives(stem) {
  return {
    'singular': {
      1: stem + presentSubjunctiveEndings.singular[1],
      2: stem + presentSubjunctiveEndings.singular[2],
      3: stem + presentSubjunctiveEndings.singular[3]
    },
    'plural': {
      1: stem + presentSubjunctiveEndings.plural[1],
      2: stem + presentSubjunctiveEndings.plural[2],
      3: stem + presentSubjunctiveEndings.plural[3]
    }
  };
};

function middleAndPassiveSubjunctives(stem) {
  return {
    'singular': {
      1: stem + presentSubjunctiveEndings.singular[1],
      2: stem + presentSubjunctiveEndings.singular[2],
      3: stem + presentSubjunctiveEndings.singular[3]
    },
    'plural': {
      1: stem + presentSubjunctiveEndings.plural[1],
      2: stem + presentSubjunctiveEndings.plural[2],
      3: stem + presentSubjunctiveEndings.plural[3]
    }
  };
};

const futureMorpheme = 'σ';

function futureActiveIndicatives(stem) {
  return {
    'singular': {
      1: stem + futureMorpheme + primaryEndings.singular[1],
      2: stem + futureMorpheme + primaryEndings.singular[2],
      3: stem + futureMorpheme + primaryEndings.singular[3]
    },
    'plural': {
      1: stem + futureMorpheme + primaryEndings.plural[1],
      2: stem + futureMorpheme + primaryEndings.plural[2],
      3: stem + futureMorpheme + primaryEndings.plural[3]
    }
  };
};

// middleAndPassiveEndings

function futureMiddleIndicatives(stem) {
  return {
    'singular': {
      1: stem + futureMorpheme + middleAndPassiveEndings.singular[1],
      2: stem + futureMorpheme + middleAndPassiveEndings.singular[2],
      3: stem + futureMorpheme + middleAndPassiveEndings.singular[3]
    },
    'plural': {
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

exports.primaryEndings = primaryEndings;
exports.middleAndPassiveEndings = middleAndPassiveEndings;
exports.presentActiveIndicatives = presentActiveIndicatives;
exports.presentActiveSubjunctives = presentActiveSubjunctives;
exports.imperfectActiveIndicatives = imperfectActiveIndicatives;
exports.futureActiveIndicatives = futureActiveIndicatives;
exports.futureMiddleIndicatives = futureMiddleIndicatives;
exports.augmentize = augmentize;
exports.stem = stem;
},{}],4:[function(require,module,exports){
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
},{"./nouns":2,"./verbs":3}]},{},[1])