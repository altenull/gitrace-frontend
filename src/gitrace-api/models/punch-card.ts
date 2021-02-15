export type OriginPunchCard = number[][];

export interface PunchCardHole {
  dayOfWeek: number;
  hour: number;
  numberOfCommits: number;
}

export type PunchCard = PunchCardHole[];
