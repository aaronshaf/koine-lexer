var assert = require("assert");
var accentuateLastVowel = require('./accentuate_last_vowel');

describe('utils/accentuateLastVowel', function() {
  it('should add acute to last character', function() {
    assert.equal(accentuateLastVowel('χα'),'χά');
    assert.equal(accentuateLastVowel('ἐ'),'ἔ');
  });
});
