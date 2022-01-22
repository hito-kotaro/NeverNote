/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSide64 from '../../images/logo_side_small.png';
import Button from '../Button/Button';
import MenuButton from '../Button/MenuButton';
import useResponsive from '../../hooks/useResponsive';
import useButtonAnctions from '../../hooks/useButtonActions';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { fetchAuth } = useAuth();
  const { onClickLogout } = useButtonAnctions();
  const navigate = useNavigate();
  const buttonStyles: string =
    'ring-2 ring-green-700 text-green-700 hover:text-green-500 hover:ring-2 hover:ring-green-500 mt-5 py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const { query } = useResponsive();
  const home = () => {
    navigate('/home');
  };

  const login = () => {
    navigate('/login');
  };
  const isAuth = fetchAuth();
  // console.log(isAuth);
  return (
    <div className="h-24 border-2 flex">
      <Link to="/" className="ml-5 my-auto w-[160px] h-[40px]">
        <img src={logoSide64} alt="logo" />
      </Link>
      <div className="mb-5 ml-auto  mr-5 flex">
        {query.isLaptop ? (
          isAuth ? (
            <>
              <Button className={buttonStyles} buttonAction={home}>
                ホーム画面へ
              </Button>
              <Button className={buttonStyles} buttonAction={onClickLogout}>
                ログアウト
              </Button>
            </>
          ) : (
            <Button className={buttonStyles} buttonAction={login}>
              ログイン
            </Button>
          )
        ) : (
          <MenuButton isAuth={isAuth} />
        )}
      </div>
    </div>
  );
};

export default Header;
