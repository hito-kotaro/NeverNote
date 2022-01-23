import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import axiosInstance from '../libs/axiosInstance';
import { authState } from '../store/authState';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [isLoading, setIsLoading] = useState(false);

  const updateAuth = useCallback(() => {
    setAuth(localStorage.getItem('auth') === 'true');
  }, []);

  const logout = useCallback((msg: string) => {
    localStorage.setItem('auth', 'false');
    updateAuth();
    removeCookie('access_token');
    navigate('/');
    toast.success(msg);
  }, []);

  const login = async (email: string, password: string) => {
    const authParams = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.post(
        '/login',
        authParams,
      );

      setIsLoading(false);
      updateAuth();
      setCookie('access_token', result.data.access_token);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('userName', `${email}`);
      updateAuth();
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
      toast.error('ログインできません');
    }
  };

  const fetchAuth = () => {
    return auth;
  };

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { isLoading, login, logout, updateAuth, fetchAuth, blankAntion };
};

export default useAuth;
