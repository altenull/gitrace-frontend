export interface User {
  id: number;
  login: string;
  avatarUrl: string;
  numberOfFollowers: number;
  numberOfFollowing: number;
  createdAt: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string;
  bio?: string;
}
