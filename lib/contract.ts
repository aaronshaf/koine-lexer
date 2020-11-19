import addCircumflex from "./utils/add_circumflex";

type ReplacerFn = (_match: any, p1: string) => string;
type Replacer = string | ReplacerFn;

// Rules based on D.A. Black's "Learn to Read New Testament Greek" (3rd ed, 133-134)

// distinguish between genuine and spurious dipthongs

const substitutions: [pattern: string, replacement: Replacer][] = [
  ["α(α|ε|η)", "α"],
  // ["αι", "αι"],
  // ["αυ", "αυ"],
  ["αο", "ω"],
  ["αω", "ω"],

  ["εα", "η"],
  ["εε", "[ει]"],
  ["εη", "η"],
  // ["ει", "ει"],
  // ["ευ", "ευ"]
  ["εο", "[ου]"],
  ["εω", "ω"],

  ["η(α|ε|η)", "η"],
  ["ηι", "ῃ"],
  // ["ηυ", "ηυ"],
  ["η(ο|ω)", "ω"],

  ["οα", "ω"],
  ["οε", "[ου]"],
  ["οη", "ω"],
  // ["οι", "οι"],
  // ["ου", "ου"],
  ["οο", "[ου]"],
  ["οω", "ω"],

  ["ω(α|ε|η)", "ω"],
  ["ωι", "ῳ"],
  // ["ωυ", "ωυ"],
  ["ωο", "ω"],
  ["ωω", "ω"],

  //   ᾳαι ει 1 ει 2 ῃ οι ου 3 ῳ
  // α ᾳ ᾳ α ᾳ ῳ ω ῳ
  // ε ῃ ει ει ῃ οι ου ῳ
  // η ῃ ῃ η ῃ ῳ ῳ
  // ο ῳ οι ου οι οι ου ῳ

  ["αᾳαι", "ᾳ"],
  ["αει", "ᾳ"],
  ["α[ει]", "α"],
  ["αῃ", "ᾳ"],
  ["αοι", "ῳ"],
  ["α[ου]", "ω"],
  ["αῳ", "ῳ"],

  ["εᾳαι", "ῃ"],
  ["εει", "[ει]"],
  ["ε[ει]", "[ει]"],
  ["εῃ", "ῃ"],
  ["εοι", "οι"],
  ["ε[ου]", "ου"],
  ["εῳ", "ῳ"],

  ["ηᾳαι", "ῃ"],
  ["ηει", "ῃ"],
  ["η[ει]", "η"],
  ["ηῃ", "ῃ"],
  ["ηοι", "ῳ"],
  ["η[ου]", ""],
  ["ηῳ", "ῳ"],

  ["οᾳαι", "ῳ"],
  ["οει", "οι"],
  ["ο[ει]", "ου"],
  ["οῃ", "οι"],
  ["οοι", "οι"],
  ["ο[ου]", "ου"],
  ["οῳ", "ῳ"],
];

const oldSubstitutions: [pattern: string, replacement: Replacer][] = [
  // "ε + ο = ου"
  ["εο", "οῦ"],

  ["οει", "οῖ"],
  ["οου", "οῦ"],

  //
  // ["εα", "η"],

  // "ε before any long vowel or diphthong drops out"
  [
    "ε([ηω]|ει|ου|ευ|αι|υι|αυ|οι)",
    (_match: any, p1: string) => {
      p1 = p1.normalize("NFC");
      const upToLastCharacter = p1.substr(0, p1.length - 1);
      const lastCharacter = addCircumflex(p1.substr(-1));
      return upToLastCharacter + lastCharacter;
    },
  ],

  // "ε + ε = ει"
  ["εε", "εῖ"],

  // "α + any combination with ι = ᾳ"
  ["α[αειουηω]ι", "ᾷ"],

  // "α + E-sound (ε or η) = α"
  ["α[εη]", "ᾶ"],

  // "α + O sound (ο, ω, or ου) = ω"
  ["α[οω]", "ῶ"],
  ["αου", "ῶ"],

  // "ο + long vowel = ω"
  ["ο[ηω]", "ῶ"],

  // "ο + short vowel or ου = ου"
  ["ο[αειου]", "οῦ"],

  // "ο + any combination with ι = οι"
  ["ο[αεου]ι", "οῖ"],
];

export default function (characters: string) {
  for (const [pattern, replacement] of substitutions) {
    if (characters.match(new RegExp(pattern, "g"))) {
      console.log({ pattern });
      // https://github.com/microsoft/TypeScript/issues/22378#issuecomment-419983692
      if (typeof replacement === "string") {
        return characters.replace(new RegExp(pattern, "g"), replacement);
      } else {
        return characters.replace(new RegExp(pattern, "g"), replacement);
      }
    }
  }
  return characters;
}

// See also: http://www.biblicalgreek.org/grammar/images/pcontracts.pdf
