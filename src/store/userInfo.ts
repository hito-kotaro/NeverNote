import { atom } from 'recoil';
import type User from '../types/User';

export const userInfo = atom<User>({
  key: 'USER_INFO',
  default: { userName: undefined, token: undefined, isAuth: false },
});

export default userInfo;
