export type Syllable = string;
export type ConsonantCluster = string;
export type Word = {
  stem?: string;
  principleParts?: any;
  indicatives?: any;
};

export type Liquids = "λ" | "ρ";
export type Nasals = "μ" | "ν";
export type GenericLiquids = Liquids | Nasals;
