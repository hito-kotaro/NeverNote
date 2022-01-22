import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useButtonActions from '../../../hooks/useButtonActions';

const Logout = () => {
  const { onClickLogout } = useButtonActions();
  const { updateAuth, fetchAuth } = useAuth();

  const navigate = useNavigate();
  onClickLogout();
  console.log(fetchAuth());
  localStorage.setItem('auth', 'false');
  updateAuth();
  console.log('LOGOUT');
  console.log(fetchAuth());

  // useEffect(() => {
  //   navigate('/');
  // }, []);

  return <></>;
};

export default Logout;
