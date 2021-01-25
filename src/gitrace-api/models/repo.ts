export interface Repo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  language: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  archived: boolean;
}

export interface RepoVM {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  size: number;
  numberOfStars: number;
  numberOfWatchers: number;
  isArchived: boolean;
  createdAt: string;
  pushedAt: string;
}
