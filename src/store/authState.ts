import { atom } from 'recoil';

export const authState = atom<boolean>({
  key: 'IS_AUTH',
  default: false,
});

export default authState;
