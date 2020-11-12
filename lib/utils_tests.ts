import { isVowel, isConsonant, withoutAccents } from "./utils";
import assert from "assert";

describe("utils", function () {
  describe("isVowel()", function () {
    it("should return true on vowels", function () {
      var vowels = [
        "α",
        "ἀ",
        "ά",
        "ἄ",
        "υ",
        "ὑ",
        "ὐ",
        "ο",
        "ό",
        "ὀ",
        "ὸ",
        "ὅ",
        "ι",
        "ί",
        "ἱ",
        "η",
        "ῆ",
        "ὴ",
        "ή",
        "ῃ",
        "ε",
        "έ",
        "ἐ",
        "ἔ",
        "ὲ",
        "ω",
        "ῶ",
        // ρ
      ];
      vowels.forEach(function (vowel) {
        assert.ok(isVowel(vowel));
      });
    });
  });

  describe("isConsonant()", function () {
    it("should return true on consonants", function () {
      var consonants = [
        "ς",
        "τ",
        "θ",
        "π",
        "σ",
        "δ",
        "φ",
        "γ",
        "ξ",
        "κ",
        "λ",
        "ζ",
        "χ",
        "ψ",
        "β",
        "ν",
        "μ",
      ];
      consonants.forEach(function (consonant) {
        assert.ok(isConsonant(consonant));
      });
    });
  });

  describe("withoutAccents()", function () {
    it("should return strip a string of accents", function () {
      assert.strictEqual(withoutAccents("ὁμολογέω"), "ομολογεω");
      assert.strictEqual(withoutAccents("ἤκουσαν"), "ηκουσαν");
      assert.strictEqual(withoutAccents("εἶπεν"), "ειπεν");
    });
  });
});
