import assert from "assert";
var accentuateLastVowel = require("./accentuate_last_vowel");

describe("utils/accentuateLastVowel", function () {
  it("should add acute to last character", function () {
    assert.strictEqual(accentuateLastVowel("χα"), "χά");
    assert.strictEqual(accentuateLastVowel("ἐ"), "ἔ");
  });
});
