import React from 'react';
import useUserInfo from '../../hooks/useUserInfo';
import useIsAuth from '../../hooks/useIsAuth';
import type User from '../../types/User';

const Home = () => {
  const { fetchUser } = useUserInfo();
  const { fetchAuth } = useIsAuth();
  const user: User = fetchUser();
  console.log(fetchAuth());
  return <div>{user.userName}さん</div>;
};

export default Home;
