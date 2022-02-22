import assert from "assert";
import contract from "./contract";

const contractions: { [word: string]: string } = {
  // // Examples from Black (133-134)
  τιμαετε: "τιμᾶτε",
  τιμαομεν: "τιμῶμεν",
  τιμαει: "τιμᾷ",
  ποιεετε: "ποιεῖτε",
  φιλεετε: "φιλεῖτε",
  φιλεομεν: "φιλοῦμεν",
  φιλεω: "φιλῶ",
  φιλεεις: "φιλεῖς",
  φιλεει: "φιλεῖ",
  δηλοω: "δηλῶ",
  δηλοομεν: "δηλοῦμεν",

  // // Examples from http://www.biblicalgreek.org/grammar/images/pcontracts.pdf
  ποιεομεν: "ποιοῦμεν",
  πληροετε: "πληροῦτε",
  ἀγαπαομεν: "ἀγαπῶμεν",

  // // Mounce
  ἀγαπαετε: "ἀγαπᾶτε",
  ἀγαπαει: "ἀγαπᾷ",
  // ποιεαι: "ποιηι",
  // εαι: "ῃ",
  // οει: "οι",
  // πληροεις: "πληροῖς",
  πληροει: "πληροῖ",
  ποιεεις: "ποιεῖς",
  πληροουσι: "πληροῦσι",
  ποιεουσι: "ποιοῦσι",

  // http://ntgreek.net/lesson27.htm
  ποιέομαι: "ποιοῦμαι",
  ἀγαπάεις: "ἀγαπᾷς",
  ἐποίεον: "ἐποίουν",
};

describe.only("contract()", function () {
  it("should correctly contract vowels", function () {
    for (let word in contractions) {
      let resultContraction = contract(word);
      assert.deepStrictEqual(
        resultContraction,
        contractions[word],
        `${word} -> ${contractions[word]}`
      );
    }
  });
});
