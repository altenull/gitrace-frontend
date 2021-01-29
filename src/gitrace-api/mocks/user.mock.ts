import { parseUserVM } from '../helpers';
import { User, UserVM } from '../models/user';

export const mockUser: User = {
  login: 'altenull',
  id: 26947777,
  avatar_url: 'https://avatars.githubusercontent.com/u/26947777?v=4',
  name: 'Heonyoung Kim',
  company: null,
  location: 'Seoul, South Korea',
  email: null,
  bio: 'Frontend developer',
  followers: 17,
  following: 22,
  created_at: '2017-04-06T02:02:51Z',
};

export const mockUserVM: UserVM = parseUserVM(mockUser);
