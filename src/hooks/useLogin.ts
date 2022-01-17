import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import useIsAuth from './useIsAuth';
import axiosInstance from '../libs/axiosInstance';

const useLogin = () => {
  const { updateAuth } = useIsAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = useCallback(async (email: string, password: string) => {
    const auth = {
      email,
      password,
    };
    // const headers = { 'Content-Type': 'application/json' };

    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.post('/login', auth);
      setIsLoading(false);
      updateAuth();
      navigate('/home', { state: result, replace: false });
    } catch (error) {
      setIsLoading(false);
      toast.error('ログインできません');
    }
  }, []);
  return { isLoading, onClickLogin };
};

export default useLogin;
