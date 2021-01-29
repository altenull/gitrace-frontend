export type PunchCard = Array<Array<number>>;

export interface PunchCardHole {
  dayOfWeek: number;
  hour: number;
  numberOfCommits: number;
}

export type PunchCardVM = Array<PunchCardHole>;

export type LanguageVM = { [language: string]: number };
