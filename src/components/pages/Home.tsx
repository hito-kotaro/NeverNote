import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import useNoteAction from '../../hooks/useApiRequests';
import useButtonAnctions from '../../hooks/useButtonActions';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const loginClassName: string =
    'mt-5 w-3/4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';

  const navigate = useNavigate();
  const { fetchAuth } = useAuth();
  const { getNotes } = useNoteAction();
  const { onClickLogout } = useButtonAnctions();

  const logout = () => {
    navigate('/logout');
  };

  const test = () => {
    console.log(fetchAuth());
  };

  return (
    <>
      <div>
        <Button className={loginClassName} buttonAction={onClickLogout}>
          ログアウト
        </Button>
      </div>
      <div>
        <Button className={loginClassName} buttonAction={getNotes}>
          getNote
        </Button>
      </div>
      <div>
        <Button className={loginClassName} buttonAction={test}>
          test
        </Button>
      </div>
      <div>{localStorage.getItem('userName')}さん</div>
    </>
  );
};

export default Home;
