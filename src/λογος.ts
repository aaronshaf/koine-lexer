import type { Word } from "../data.d";
import {
  stem,
  presentActiveIndicatives,
  futureActiveIndicatives,
  futureMiddleIndicatives,
} from "./verbs";

function word(input: string): Word {
  const word: Word = {
    principleParts: {
      1: input,
      // 2: '',
      // 3: '',
      // 4: '',
      // 5: '',
      // 6: ''
    },
  };
  word.stem = stem(word);
  if (typeof word.stem === "string") {
    word.indicatives = {
      present: {
        active: presentActiveIndicatives(word.stem),
      },
      middleAndPassive: {},
      future: {
        active: futureActiveIndicatives(word.stem),
        middle: futureMiddleIndicatives(word.stem),
      },
    };
  }

  return word;
}

export default word;
