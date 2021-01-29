import { User, UserVM } from '../models/user';

const parseUserVM = ({
  login,
  id,
  avatar_url,
  name,
  company,
  location,
  email,
  bio,
  followers,
  following,
  created_at,
}: User): UserVM => {
  return {
    id,
    login,
    name,
    company,
    location,
    email,
    bio,
    avatarUrl: avatar_url,
    numberOfFollowers: followers,
    numberOfFollowing: following,
    createdAt: created_at,
  };
};

export default parseUserVM;
