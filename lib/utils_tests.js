var utils = require('./utils');
var assert = require("assert");

describe('utils', function(){
  describe('isVowel()', function(){
    it('should return true on vowels', function() {
      var vowels = [
        'α', 'ἀ', 'ά', 'ἄ',
        'υ', 'ὑ', 'ὐ',
        'ο', 'ό', 'ὀ', 'ὸ', 'ὅ',
        'ι', 'ί', 'ἱ',
        'η', 'ῆ', 'ὴ', 'ή', 'ῃ',
        'ε', 'έ', 'ἐ', 'ἔ', 'ὲ',
        'ω', 'ῶ'
        // ρ
      ];
      vowels.forEach(function(vowel) {
        assert.ok(utils.isVowel(vowel));
      });
    });
  });

  describe('isConsonant()', function(){
    it('should return true on consonants', function(){
      var consonants = [
        'ς',
        'τ',
        'θ',
        'π',
        'σ',
        'δ',
        'φ',
        'γ',
        'ξ',
        'κ',
        'λ',
        'ζ',
        'χ',
        'ψ',
        'β',
        'ν',
        'μ'
      ];
      consonants.forEach(function(consonant) {
        assert.ok(utils.isConsonant(consonant));
      });
    });
  });

  describe('withoutAccents()', function() {
    it('should return strip a string of accents', function(){
      assert.equal(utils.withoutAccents('ὁμολογέω'),'ομολογεω');
      assert.equal(utils.withoutAccents('ἤκουσαν'),'ηκουσαν');
      assert.equal(utils.withoutAccents('εἶπεν'),'ειπεν');
    });
  });
});