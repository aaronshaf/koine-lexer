import unorm from "unorm";

const consonants = [
  "β",
  "γ",
  "δ",
  "ζ",
  "θ",
  "κ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "π",
  "ρ",
  "ς",
  "σ",
  "τ",
  "φ",
  "χ",
  "ψ",
];
const consonantClustersPronouncedTogether = [
  "βλ",
  "βρ",
  "γλ",
  "γν",
  "γρ",
  "δρ",
  "θλ",
  "θρ",
  "θν",
  "κλ",
  "κρ",
  "κτ",
  "μν",
  "πλ",
  "πν",
  "πρ",
  "πτ",
  "σκ",
  "σκλ",
  "σμ",
  "σπ",
  "σπλ",
  "στ",
  "στρ",
  "σφ",
  "σθ",
  "σχ",
  "τρ",
  "φθ",
  "φλ",
  "φρ",
  "χρ",
  "χθ",
];

const longVowels = ["η", "ω", "ᾳ"];
const shortVowels = ["α", "ε", "ι", "ο", "υ"];
const vowels = longVowels.concat(shortVowels);

const longDiphthongs = ["ει", "ηυ", "ου", "ευ", "αι", "υι"];
const shortDiphthongsWhenFinal = ["αυ", "οι"];
const diphthongs = longDiphthongs.concat(shortDiphthongsWhenFinal);

function isLongVowel(character: string) {
  return longVowels.indexOf(character) !== -1;
}

export function isLongSyllable(syllable: string) {
  var vowelsOnly = syllable.split("").filter(isVowel).join("");
  if (vowelsOnly.length === 2) {
    return isDiphthong(vowelsOnly);
  }
  return isLongVowel(vowelsOnly);
}

function isVowel(character: string) {
  return vowels.indexOf(unorm.nfd(character)[0]) !== -1;
}

function beginsWithVowel(characters: string) {
  return isVowel(characters[0]);
}

function isConsonant(character: string) {
  return !exports.isVowel(character);
}

function isDiphthong(characters: string) {
  return diphthongs.indexOf(characters) !== -1;
}

function beginsWithConsonant(characters: string) {
  return isConsonant(characters[0]);
}

function beginsWithDiphthong(characters: string) {
  return diphthongs.indexOf(withoutAccents(characters).substr(0, 2)) !== -1;
}

function beginsWithConsonantClusterPronouncedTogether(characters: string) {
  var charactersLowerCased = characters.toLowerCase();
  for (var x = 0; x < consonantClustersPronouncedTogether.length; x++) {
    if (
      charactersLowerCased.indexOf(consonantClustersPronouncedTogether[x]) === 0
    ) {
      return characters.substr(
        0,
        consonantClustersPronouncedTogether[x].length
      );
    }
  }
  return null;
}

function endsWithShortDiphthong(characters: string) {
  return (
    shortDiphthongsWhenFinal.indexOf(
      characters.substr(characters.length - 2)
    ) !== -1
  );
}

function isSingleConsonant(characters: string) {
  return characters.length === 1 && isConsonant(characters[0]);
}

function beginsWithSingleConsonantFollowedByVowel(characters: string) {
  return isConsonant(characters[0]) && isVowel(characters[1]);
}

function beginsWithVowelFollowedByVowel(characters: string) {
  return isVowel(characters[0]) && isVowel(characters[1]);
}

function beginsWithDoubleConsonant(characters: string) {
  return (
    characters.length > 1 &&
    isConsonant(characters[0]) &&
    isConsonant(characters[1])
  );
}

function withoutAccent(character: string) {
  return unorm.nfd(character)[0];
}

function withoutAccents(characters: string) {
  return characters.split("").map(withoutAccent).join("");
}

function removePunctuation(characters: string) {
  return characters.replace(/[,.·;]/g, "");
}

function removeNumbers(characters: string) {
  return clean(characters).replace(/[1234567890]/g, "");
}

function lengthen(vowel: string) {}

function connectAndLengthen(part1: string, part2: string) {}

function clean(characters: string) {
  return (
    characters
      //remove newlines
      .replace(/(\r\n|\n|\r)/gm, "")
      // remove multiple spaces as well
      .replace(/ +(?= )/g, "")
  );
}

export {
  consonants,
  consonantClustersPronouncedTogether,
  isVowel,
  isLongVowel,
  isConsonant,
  withoutAccents,
  removeNumbers,
  removePunctuation,
  isSingleConsonant,
  beginsWithVowel,
  beginsWithDiphthong,
  beginsWithConsonant,
  beginsWithVowelFollowedByVowel,
  beginsWithSingleConsonantFollowedByVowel,
  beginsWithDoubleConsonant,
  beginsWithConsonantClusterPronouncedTogether,
  endsWithShortDiphthong,
};
