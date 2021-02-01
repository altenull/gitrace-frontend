export interface Author {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface AuthorVM {
  id: number;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
}

export interface WeeklyCommitActivity {
  w: number; // Start of the week, given as a Unix timestamp.
  a: number; // Number of additions
  d: number; // Number of deletions
  c: number; // Number of commits
}

export interface WeeklyCommitActivityVM {
  timestamp: number;
  numberOfAdditions: number;
  numberOfDeletions: number;
  numberOfCommits: number;
}

export interface CommitActivity {
  total: number;
  weeks: WeeklyCommitActivity[];
  author: Author;
}

export interface CommitActivityVM {
  totalCommits: number;
  weeklyCommitActivities: WeeklyCommitActivityVM[];
  author: AuthorVM;
}

export interface RepoDetail {
  commitActivities: CommitActivity[];
}

export interface RepoDetailVM {
  commitActivityVMs: CommitActivityVM[];
}
