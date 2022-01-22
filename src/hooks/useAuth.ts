import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../store/authState';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const updateAuth = useCallback(() => {
    setAuth(localStorage.getItem('auth') === 'true');
  }, []);

  const fetchAuth = () => {
    return auth;
  };

  return { updateAuth, fetchAuth };
};

export default useAuth;
