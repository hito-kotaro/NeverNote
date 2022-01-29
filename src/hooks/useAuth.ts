import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { axiosInstance } from '../libs/axiosInstance';

const useAuth = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const logout = useCallback((msg: string) => {
    localStorage.setItem('auth', 'false');
    localStorage.removeItem('token');
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
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('auth', 'true');
      localStorage.setItem('userName', `${email}`);
      navigate('/mypage');
    } catch (error) {
      setIsLoading(false);
      toast.error('ログインできません');
    }
  };

  const fetchAuth = () => {
    const result = localStorage.getItem('auth') === 'true';
    return result;
  };

  const blankAntion = () => {
    toast.error('未実装です');
  };

  return { isLoading, login, logout, fetchAuth, blankAntion };
};

export default useAuth;
