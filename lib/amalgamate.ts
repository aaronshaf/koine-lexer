export default function (characters: string) {
  // Labials
  // "π, β, φ + σ form the double consonant ψ" (Black)
  characters = characters.replace(/[πβφ]σ/g, "ψ");

  // Velars
  // "κ, γ, χ + σ form the double consonant ξ." (Black)
  characters = characters.replace(/[κγχ]σ/g, "ξ");

  // Dentals
  // "τ, δ, θ drop out before σ" (Black)
  characters = characters.replace(/[τδθ]σ/g, "σ");
  return characters;
}
