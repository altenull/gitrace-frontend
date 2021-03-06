import { Author } from './author';

export interface OriginWeeklyCommitActivity {
  w: number; // Start of the week, given as a Unix timestamp.
  a: number; // Number of additions
  d: number; // Number of deletions
  c: number; // Number of commits
}

export interface WeeklyCommitActivity {
  startOfWeekDate: string;
  numberOfAdditions: number;
  numberOfDeletions: number;
  numberOfCommits: number;
}

export interface OriginCommitActivity {
  totalCommits: number;
  weeklyCommitActivities: OriginWeeklyCommitActivity[];
  author: Author;
}

export interface CommitActivity {
  totalCommits: number;
  weeklyCommitActivities: WeeklyCommitActivity[];
  author: Author;
}
