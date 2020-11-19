export type Nasals = "μ" | "ν";
export type Liquids = "λ" | "ρ";
export type GenericLiquids = Nasals | Liquids;

export type Labials = "π" | "β" | "φ";
export type Velars = "κ" | "γ" | "χ";
export type Dentals = "τ" | "δ" | "θ";

export type VoicedStops = "β" | "δ" | "γ";
export type AspiratedStops = "φ" | "θ" | "χ";
export type UnaspiratedStops = "π" | "τ" | "κ";
export type Stops = VoicedStops | AspiratedStops | UnaspiratedStops;

export type Sibilants = "σ" | "ζ";

export type Syllable = string;
export type ConsonantCluster = string;

export enum Accents {
  Acute,
  Grave,
  Circumflex,
}

// https://www.koinegreek.com/koine-pronunciation
// https://en.wikipedia.org/wiki/Ancient_Greek_phonology
