import { atom } from 'recoil';

export const pageIdState = atom<string>({
  key: 'PAGE_ID',
  default: 'home',
});

export default pageIdState;
