var util = require('./util');
var assert = require("assert");

describe('util', function(){
  describe('isVowel()', function(){
    it('should return true on vowels', function() {
      var vowels = [
        'α', 'ἀ', 'ά', 'ἄ',
        'υ', 'ὑ', 'ὐ',
        'ο', 'ό', 'ὀ', 'ὸ', 'ὅ',
        'ι', 'ί', 'ἱ',
        'η', 'ῆ', 'ὴ', 'ή',
        'ε', 'έ', 'ἐ', 'ἔ', 'ὲ',
        'ω', 'ῶ'
        // ρ
      ];
      vowels.forEach(function(vowel) {
        assert.ok(util.isVowel(vowel));
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
        assert.ok(util.isConsonant(consonant));
      });
    });
  });
});