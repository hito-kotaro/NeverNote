import React from 'react';
import useIsAuth from '../../hooks/useIsAuth';
import Button from '../Button/Button';
import useFetchNotes from '../../hooks/useFetchNotes';
import usePuthNotes from '../../hooks/usePutNotes';

const Home = () => {
  const { fetchNotes } = useFetchNotes();
  const { postNotes } = usePuthNotes();
  const { fetchAuth } = useIsAuth();
  const userName: string = 'ゲスト';
  console.log(fetchAuth());
  return (
    <>
      <Button className="" buttonAction={fetchNotes}>
        {userName}
      </Button>
      <div>{userName}さん</div>
      <Button className="" buttonAction={postNotes}>
        post
      </Button>
    </>
  );
};

export default Home;
