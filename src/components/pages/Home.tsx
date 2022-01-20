import React from 'react';
import useIsAuth from '../../hooks/useIsAuth';
import Button from '../Button/Button';
import useFetchNotes from '../../hooks/useFetchNotes';

const Home = () => {
  const { fetchNotes } = useFetchNotes();
  const { fetchAuth } = useIsAuth();
  const userName: string = 'ゲスト';
  console.log(fetchAuth());
  return (
    <>
      <Button className="" buttonAction={fetchNotes}>
        {userName}
      </Button>
      <div>{userName}さん</div>;
    </>
  );
};

export default Home;
