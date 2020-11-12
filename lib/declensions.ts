const pureEtaSingularEndings = {
  'nominative': 'η',
  'genitive': 'ης',
  'dative': 'ῃ',
  'accusative': 'ην'
};

const pureAlphaSingularEndings = {
  'nominative': 'α',
  'genitive': 'ας',
  'dative': 'ᾳ',
  'accusative': 'αν'
};

const mixedEtaSingularEndings = {
  'nominative': 'ης',
  'genitive': 'ου',
  'dative': 'ῃ',
  'accusative': 'ην'
};

const pluralEndings = {
  'nominative': 'αι',
  'genitive': 'ων',
  'dative': 'αις',
  'accusative': 'ας'
};

/*
Pattern one (καρδία): If the final α has what I call a “rye” letter (ρ ι ε) letter in front of the α, the α is retained throughout the singular=καρδία. Pattern two (γλῶσσα): If the final α does not have a “rye” letter (ρ ι ε) letter in front of the α, an η is used in the genitive and dative singular (the letters used in these cases in ἀγαθή).

Richards, W. L. (2011). Read Greek in 30 Days [or Less]: New Testament, Old Testament, Apocrypha, Philo, Church Fathers (28). Berrien Springs, MI: Breakthrough Books Company.
*/