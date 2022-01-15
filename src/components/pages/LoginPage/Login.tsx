/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../../Button/LoginButton';
import Input from '../../Input/Input';
import logo64 from '../../../images/logo_64.png';
import BackGroundImage from '../../../images/bg.jpg';

const Login = () => {
  const loginStyles: string =
    'before:content mt-5 w-3/4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const otherAuthStyles: string =
    'border mt-5 w-3/4 py-2 px-4 text-gray-500 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';

  const mailPlaceholder = 'mail@example.com';
  const passwordPlaceholder = 'パスワード';
  const inputStyles =
    'mt-5 border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

  return (
    <div className="flex">
      <div className="hidden md:inline-block h-screen w-1/2 bg-green-600 ">
        <img
          src={BackGroundImage}
          alt="backgroundImage"
          className=" mx-auto block opacity-50"
        />
        <div className="text-center mt-10 text-[24px] text-white font-extrabold">
          仕事もプライベートもなんとなく整理
        </div>
        <div className="text-center mt-3 text-white font-medium">
          <p>ノートがひとつにまとめられるので、</p>
          <p>情報の記憶と目標の実現がちょっと加速します。</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen">
        <div className="w-9/12  bg-white mt-5 mx-auto text-center py-3">
          <div className="flex justify-center ">
            <Link to="/">
              <img src={logo64} alt="logo" className="block mt-5" />
            </Link>
          </div>
          <p>大切な情報をちょっと記憶しましょう。</p>
          <LoginButton styles={otherAuthStyles}>Googelで続行</LoginButton>
          <LoginButton styles={otherAuthStyles}>Appleで続ける</LoginButton>

          <div className="bg-white w-3/4 h-3 mx-auto border-b-2 mt-5" />
          <Input
            type="text"
            styles={inputStyles}
            placeholder={mailPlaceholder}
          />
          <Input
            type="password"
            styles={inputStyles}
            placeholder={passwordPlaceholder}
          />

          <LoginButton styles={loginStyles}>ログイン</LoginButton>

          <p className="mt-5 text-lg">
            <input type="checkbox" className="" />
            認証情報を24時間記憶する
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
