export interface Repo {
  id: number;
  name: string;
  size: number;
  numberOfStars: number;
  numberOfWatchers: number;
  isArchived: boolean;
  createdAt: string;
  pushedAt: string;
  description?: string;
  language?: string;
}
