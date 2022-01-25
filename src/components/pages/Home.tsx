import React, { useEffect } from 'react';
import Button from '../Button/Button';
import useApiRequests from '../../hooks/useApiRequests';
import useAuth from '../../hooks/useAuth';
import type Note from '../../types/Note';

const Home = () => {
  const loginClassName: string =
    'mt-5 w-3/4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const { getNotes, getStatus, postNote } = useApiRequests();
  const { logout } = useAuth();

  useEffect(() => {
    getNotes();
  }, []);

  const testData: Note = {
    title: '今日の講義について',
    category: '授業メモ',
    description: '第９回の授業メモです\\nこんなことしました。',
    date: '2021/08/01',
    mark_div: 1,
  };

  return (
    <>
      <div>
        <Button
          className={loginClassName}
          buttonAction={() => logout('ログアウトしました')}
        >
          ログアウト
        </Button>
      </div>
      <div>
        <Button className={loginClassName} buttonAction={getStatus}>
          getStatus
        </Button>
      </div>
      <div>
        <Button
          className={loginClassName}
          buttonAction={() => postNote(testData)}
        >
          postNote
        </Button>
      </div>

      <div>{localStorage.getItem('userName')}さん</div>
    </>
  );
};

export default Home;
