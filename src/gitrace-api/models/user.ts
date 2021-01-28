export interface User {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  followers: number;
  following: number;
  created_at: string;
}

export interface UserVM {
  id: number;
  login: string;
  avatarUrl: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  numberOfFollowers: number;
  numberOfFollowing: number;
  createdAt: string;
}
