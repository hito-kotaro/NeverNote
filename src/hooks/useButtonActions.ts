/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import useIsAuth from './useIsAuth';
import useUserInfo from './useUserInfo';
import axiosInstance from '../libs/axiosInstance';
import { userInfo } from '../store/userInfo';

const useButtonAnctions = () => {
  const { updateAuth } = useIsAuth();
  const { updateUser } = useUserInfo();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['login']);
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = useCallback(
    async (email: string, password: string) => {
      const auth = {
        email,
        password,
      };
      try {
        setIsLoading(true);
        const result: AxiosResponse = await axiosInstance.post('/login', auth);
        const newUser = {
          userName: email,
          token: result.data.access_token,
          isAuth: true,
        };
        setIsLoading(false);
        updateAuth();
        updateUser(newUser);
        setCookie('login', result.data.access_token);
        navigate('/home');
      } catch (error) {
        setIsLoading(false);
        toast.error('ログインできません');
      }
    },
    [updateAuth, updateUser],
  );

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { isLoading, blankAntion, onClickLogin };
};

export default useButtonAnctions;
