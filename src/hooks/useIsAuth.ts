import { useRecoilState } from 'recoil';
import { authState } from '../store/authState';

const useIsAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const updateAuth = () => setAuth(!auth);
  const fetchAuth = () => {
    return auth;
  };
  return { updateAuth, fetchAuth };
};

export default useIsAuth;
