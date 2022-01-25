import { atom } from 'recoil';

const getDefault = () => {
  const res = localStorage.getItem('auth') === 'true';
  return res;
};
export const authState = atom<boolean>({
  key: 'IS_AUTH',
  default: getDefault(),
});

export default authState;
