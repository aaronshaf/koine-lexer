import assert from "assert";
import amalgamate from "./amalgamate";

const amalgamations: { [word: string]: string } = {
  // π, β, φ + σ -> ψ
  πέμπσω: "πέμψω",

  // κ, γ, χ + σ -> ξ
  ἄγσω: "ἄξω",

  // τ, δ, θ + σ -> σ
  πείθσω: "πείσω",
};

describe("amalgamate()", function () {
  it("should correctly amalgamate consonants", function () {
    for (const word in amalgamations) {
      const resultAmalgamation = amalgamate(word);
      assert.deepStrictEqual(amalgamations[word], resultAmalgamation);
    }
  });
});
