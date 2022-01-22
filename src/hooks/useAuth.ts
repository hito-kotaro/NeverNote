import { useRecoilState } from 'recoil';
import { authState } from '../store/authState';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const updateAuth = () => {
    setAuth(localStorage.getItem('auth') === 'true');
  };

  const fetchAuth = () => {
    return auth;
  };

  // const checkAuthCookie = useCallback(async () => {
  //   const check = await getStatus();
  //   if (check.status !== 200) localStorage.setItem('auth', 'false');
  //   else localStorage.setItem('auth', 'true');
  // }, []);

  return { updateAuth, fetchAuth };
};

export default useAuth;
