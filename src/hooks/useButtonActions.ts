import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import useAuth from './useAuth';
import axiosInstance from '../libs/axiosInstance';

const useButtonAnctions = () => {
  const { updateAuth } = useAuth();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogout = useCallback((msg: string) => {
    localStorage.setItem('auth', 'false');
    updateAuth();
    removeCookie('access_token');
    navigate('/');
    toast.error(msg);
  }, []);

  const onClickLogin = async (email: string, password: string) => {
    const auth = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.post('/login', auth);

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

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { isLoading, blankAntion, onClickLogin, onClickLogout };
};

// export default useButtonAnctions;
