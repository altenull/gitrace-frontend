import { atom } from 'recoil';
import { User } from '../../gitrace-api/models/user';

const PREFIX_KEY = '@@gitrace-api';

export const userAtom = atom<User | null>({
  key: `${PREFIX_KEY}/user`,
  default: null,
});
