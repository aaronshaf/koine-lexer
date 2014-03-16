var assert = require("assert");
var amalgamate = require('./amalgamate');

describe('amalgamate()', function() {
  var amalgamations = {
    // π, β, φ + σ -> ψ
    'πέμπσω': 'πέμψω',

    // κ, γ, χ + σ -> ξ
    'ἄγσω': 'ἄξω',

    // τ, δ, θ + σ -> σ
    'πείθσω': 'πείσω'
  };

  it('should correctly amalgamate consonants', function() {
    for(var word in amalgamations) {
      var resultAmalgamation = amalgamate(word);
      assert.deepEqual(amalgamations[word],resultAmalgamation);
    }
  });
});
