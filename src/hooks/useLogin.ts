import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios, { AxiosResponse } from 'axios';
import useIsAuth from './useIsAuth';

const useLogin = () => {
  const { updateAuth } = useIsAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = useCallback(async (email: string, password: string) => {
    const BASE_URL = 'https://raisetech-memo-api.herokuapp.com/api';
    const auth = {
      email,
      password,
    };
    const headers = { 'Content-Type': 'application/json' };

    try {
      setIsLoading(true);
      const result: AxiosResponse = await axios.post(
        `${BASE_URL}/login`,
        auth,
        {
          headers,
        },
      );
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
