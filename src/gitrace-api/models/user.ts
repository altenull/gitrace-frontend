export interface User {
  id: number;
  login: string; // login is user name
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
