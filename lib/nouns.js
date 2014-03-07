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