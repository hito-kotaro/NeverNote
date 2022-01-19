import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import useIsAuth from './useIsAuth';
import axiosInstance from '../libs/axiosInstance';

const useButtonAnctions = () => {
  const { updateAuth } = useIsAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = useCallback(async (email: string, password: string) => {
    const auth = {
      email,
      password,
    };

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

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { blankAntion, isLoading, onClickLogin };
};

export default useButtonAnctions;
