import { atom, selector } from 'recoil';

const getDefault = () => {
  const res = localStorage.getItem('auth') === 'true';
  return res;
};
export const authState = atom<boolean>({
  key: 'IS_AUTH',
  default: getDefault(),
});

export const authStateSelector = selector({
  key: 'IS_AUTH_SELECTOR',
  get: ({ get }) => {
    return get(authState);
  },
});

export default authState;
