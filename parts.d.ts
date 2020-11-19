export enum Numbers {
  Singular, // I, you, he
  Plural, // we, y'all, them
}

export enum Persons {
  First, // e.g. I, we
  Second, // e.g. you, y'all
  Third, // e.g. we, them
}

export enum Tenses {
  Present, // "usually denotes continuous kind of action"
  Future, // anticipated action
  Imperfect, // happening in past, e.g. "was walking"
  Aorist, // past simple
  Perfect, // "action has been completed and the results of the action are continuing on"
  Pluperfect, // "action that is complete and existed at some time in the past"
  FuturePerfect,
}

export enum Moods {
  Indicative, // statement of fact
  Subjunctive, // probability or objective possibility
  Imperative, // command or instruction
  Optative, // "possibility... often used to convey a wish or hope"
}

export enum Voices {
  Active, // "the sentence is executing the action"
  Middle, // "acting in his own interest or on his own behalf"
  Passive, // "the subject of the sentence is being acted upon"
}

export enum Aspects {
  Ongoing,
  Simple,
  Completed,
}

export type PrimaryTenses = Tenses.Present | Tenses.Future;

export type SecondaryTenses =
  | Tenses.Imperfect
  | Tenses.Aorist
  | Tenses.Perfect
  | Tenses.Pluperfect;

// One source: https://www.ntgreek.org/learn_nt_greek/verbs1.htm
