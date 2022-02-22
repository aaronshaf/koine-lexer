// http://call.canil.ca/koine/VerbTypes.html
// "The information on this page is taken from
// The Morphology of Biblical Greek, by W.D. Mounce (1994)"

const adverbs = ["adverb", "adverb; co", "adverb; pr"];

const nouns = [
  "n-1a",
  "n-1a;n-2c",
  "n-1b",
  "n-1c",
  "n-1d",
  "n-1e",
  "n-1f",
  "n-1g",
  "n-1h",
  "n-2a",
  "n-2b",
  "n-2c",
  "n-2d(1)",
  "n-2e",
  "n-3a(1)",
  "n-3a(2)",
  "n-3b(1)",
  "n-3b(2)",
  "n-3b(2b)",
  "n-3b(3)",
  "n-3c(1)",
  "n-3c(2)",
  "n-3c(3)",
  "n-3c(4)",
  "n-3c(5a)",
  "n-3c(5b)",
  "n-3c(6a)",
  "n-3c(6b)",
  "n-3c(6c)",
  "n-3c(6d)",
  "n-3d(1)",
  "n-3d(2a)",
  "n-3d(2b)",
  "n-3d(3)",
  "n-3e(1)",
  "n-3e(2)",
  "n-3e(2b)",
  "n-3e(3)",
  "n-3e(4)",
  "n-3e(5a)",
  "n-3e(5b)",
  "n-3f(1a)",
  "n-3f(1a);n-3c(5b)",
  "n-3f(1b)",
  "n-3f(1c)",
  "n-3f(2a)",
  "n-3f(2b)",
  "n-3f(2c)",
  "n-3g(1)",
  "n-3g(2)",
] as const;

const adjectives = [
  "a-1a(1)",
  "a-1a(2a)",
  "a-1a(2b)",
  "a-1b",
  "a-2a",
  "a-2b",
  "a-3a",
  "a-3b(1)",
  "a-3b(2)",
  "a-4a",
  "a-4b(1)",
  "a-4b(2)",
  "a-5",
] as const;

const verbs = [
  //// Present tense stem = verbal root

  // Roots ending in ι̭ (consonantal iota) or Ϝ (digamma)
  "v-1a(1)", // roots ending in consonantal iota
  "v-1a(2)", // roots ending in αι
  "v-1a(3)", // roots ending in ει
  "v-1a(4)", // roots ending in υ
  "v-1a(5)", // roots ending in αυ
  "v-1a(6)", // roots ending in ευ (retain υ in the present)
  "v-1a(7)", // roots ending in ευ (lose υ in the present)
  "v-1a(8)", // roots ending in ου

  // Roots ending in a stop
  "v-1b(1)", // labials (π β φ)
  "v-1b(2)", // velars (κ γ χ)
  "v-1b(3)", // dentals (τ δ θ)
  "v-1b(4)", // stop (adding ε to form the present tense stem)

  // Roots ending in a liquid/nasal
  "v-1c(1)", // ρ
  "v-1c(2)", // μ or ν

  // Roots ending in a vowel
  "v-1d(1a)", // ending in α lengthens before a tense form
  "v-1d(1b)", // ending in α does not lengthen before a tense form
  "v-1d(2a)", // ending in ε lengthens before a tense form
  "v-1d(2b)", // ending in ε does not lengthen before a tense form
  "v-1d(2c)", // ending in ε loses the ε in the present tense
  "v-1d(3)", // ending in ο

  //// Present tense stem = verbal root + ι

  // Roots ending in δ or γ adds ι̭> ζω
  "v-2a(1)",
  "v-2a(2)",

  // Roots ending in a velar (κγχ) adds ι̭ > σσω
  "v-2b",

  // Roots ending in a Ϝ (digamma)
  "v-2c",

  // Roots ending in a liquid (λ ρ) or nasal (μ ν)
  "v-2d(1)",
  "v-2d(2)",
  "v-2d(3)",
  "v-2d(4)",
  "v-2d(6)",

  // Present tense stem = verbal root + ν
  "v-3a(1)",
  "v-3a(2a)",
  "v-3a(2b)",
  "v-3c(1)",
  "v-3c(2)",

  // Present tense stem = verbal root + τ
  "v-4",

  // Present tense stem = verbal root + (ι)σκ
  "v-5a",
  "v-5a; v-7",
  "v-5b",

  // Athematic (μι) verbs
  "v-6a",
  "v-6b",

  // Verbal roots that change their stem vowel
  // v-7
] as const;

const contractVerbs = [
  "cv-1a(1)",
  "cv-1a(3)",
  "cv-1a(4)",
  "cv-1a(5)",
  "cv-1a(6)",
  "cv-1a(7)",
  "cv-1a(8)",
  "cv-1b(1)",
  "cv-1b(2)",
  "cv-1b(2a)",
  "cv-1b(3)",
  "cv-1b(4)",
  "cv-1c(1)",
  "cv-1c(2)",
  "cv-1d(1a)",
  "cv-1d(1b)",
  "cv-1d(2",
  "cv-1d(2)",
  "cv-1d(2a)",
  "cv-1d(2b)",
  "cv-1d(2c)",
  "cv-1d(3)",
  "cv-1da)(2",
  "cv-2a(",
  "cv-2a(1)",
  "cv-2a(2)",
  "cv-2b",
  "cv-2c",
  "cv-2d",
  "cv-2d(1)",
  "cv-2d(2)",
  "cv-2d(3)",
  "cv-2d(4)",
  "cv-2d(5)",
  "cv-2d(6)",
  "cv-3a(1)",
  "cv-3a(2a)",
  "cv-3a(2b)",
  "cv-3b",
  "cv-3c(1)",
  "cv-3c(2)",
  "cv-4",
  "cv-5a",
  "cv-5b",
  "cv-6(a)",
  "cv-6a",
  "cv-6b",
] as const;

const otherMorphcats = [
  "conj",
  "cv-",
  "interj",
  "interjecti",
  "interjectio",
  "particle",
  "prep",
] as const;

const morphcats = [
  ...nouns,
  ...adverbs,
  ...adjectives,
  ...verbs,
  ...contractVerbs,
  ...otherMorphcats,
];

export default morphcats;
