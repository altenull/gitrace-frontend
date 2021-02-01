import { Author } from './author';

export interface WeeklyCommitActivity {
  w: number; // Start of the week, given as a Unix timestamp.
  a: number; // Number of additions
  d: number; // Number of deletions
  c: number; // Number of commits
}

export interface WeeklyCommitActivityVM {
  startOfWeekDate: string;
  numberOfAdditions: number;
  numberOfDeletions: number;
  numberOfCommits: number;
}

export interface CommitActivity {
  totalCommits: number;
  weeklyCommitActivities: WeeklyCommitActivity[];
  author: Author;
}

export interface CommitActivityVM {
  totalCommits: number;
  weeklyCommitActivitiesVM: WeeklyCommitActivityVM[];
  author: Author;
}
