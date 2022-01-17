import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSide64 from '../../../../images/logo_side_small.png';
import Button from '../../../Button/Button';

const Header = () => {
  const nevigate = useNavigate();
  const buttonStyles: string =
    'ring-2 ring-green-700 text-green-700 hover:text-green-500 hover:ring-2 hover:ring-green-500 mt-5 py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';

  const login = () => {
    nevigate('/login');
  };
  return (
    <div className="h-24 border-2 flex">
      <img
        src={logoSide64}
        alt="logo"
        className="ml-5 my-auto w-[160px] h-[40px]"
      />
      <div className="mb-5 ml-auto  mr-5">
        <Button className={buttonStyles} buttonAction={login}>
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default Header;
