import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import useIsAuth from './useIsAuth';
import axiosInstance from '../libs/axiosInstance';

const useButtonAnctions = () => {
  const { updateAuth } = useIsAuth();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['access_token']);
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogout = useCallback(() => {
    // ローカルストレージのuserNameを削除する
    // cookie(access_token)を削除する
    // isAuthをfalseにする
    // トップ画面に遷移
  }, []);

  const onClickLogin = useCallback(
    async (email: string, password: string) => {
      // const headers = { 'Content-Type': 'application/json' };
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
        localStorage.setItem('userName', 'email');
        navigate('/home');
      } catch (error) {
        setIsLoading(false);
        toast.error('ログインできません');
      }
    },
    [updateAuth],
  );

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { isLoading, blankAntion, onClickLogin };
};

export default useButtonAnctions;
