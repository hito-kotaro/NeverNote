import React, { useEffect } from 'react';
import Button from '../Button/Button';
import useApiRequests from '../../hooks/useApiRequests';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const loginClassName: string =
    'mt-5 w-3/4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const { getNotes, getStatus } = useApiRequests();
  const { logout } = useAuth();

  useEffect(() => {
    getNotes();
  }, []);

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
      <div>{localStorage.getItem('userName')}さん</div>
    </>
  );
};

export default Home;
