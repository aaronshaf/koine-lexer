import unorm from "unorm";
import { syllabify } from "./syllabify";
import { Syllable } from "./declarations";
import { isLongSyllable } from "./utils";
import removeAcutes from "./utils/remove_acutes";
import removeGraves from "./utils/remove_graves";
import accentuateLastVowel from "./utils/accentuate_last_vowel";
import containsCircumflex from "./utils/contains_circumflex";

function accentuateAntepenult(syllables: Syllable[]) {
  syllables[syllables.length - 3] = accentuateLastVowel(
    syllables[syllables.length - 3]
  );
  return syllables;
}

function accentuatePenult(syllables: Syllable[]) {
  syllables[syllables.length - 2] = accentuateLastVowel(
    syllables[syllables.length - 2]
  );
  return syllables;
}

function accentuateUltima(syllables: Syllable[]) {
  syllables[syllables.length - 1] = accentuateLastVowel(
    syllables[syllables.length - 1]
  );
  return syllables;
}

function accentuateVerb(word: string) {
  word = removeAcutes(removeGraves(word));
  let syllables = syllabify(word);
  // var antepenult = syllables[syllables.length - 3];
  let penult = syllables[syllables.length - 2];
  let ultima = syllables[syllables.length - 1];

  // if circumflex is on the ultima, then acute was absorbed from penultima
  if (containsCircumflex(ultima)) {
    return word;
  }

  if (syllables.length > 1) {
    if (isLongSyllable(ultima)) {
      syllables = accentuatePenult(syllables);
    } else {
      if (syllables.length > 2) {
        syllables = accentuateAntepenult(syllables);
      } else {
        // "The acute may not stand on a long penult when the
        // ultima is short: δούλου, but δοῦλος." (Black)

        if (isLongSyllable(ultima)) {
          syllables = accentuatePenult(syllables);
        } else if (!isLongSyllable(penult)) {
          syllables = accentuatePenult(syllables);
        }
      }
    }
  } else {
    syllables = accentuateUltima(syllables);
  }

  return unorm.nfc(syllables.join(""));
}

export { accentuateVerb };

// John 9:40-41 has it all...

/*
oxytone
  words 'born' with accent on ultima

paroxytone
  words 'born' with accent on penultima

proparoxytone
  words 'born' with accent on antepenultima
*/
