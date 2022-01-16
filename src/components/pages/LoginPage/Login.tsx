/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LoginButton from '../../Button/LoginButton';
import logo64 from '../../../images/logo_64.png';
import BackGroundImage from '../../../images/bg.jpg';
import useLogin from '../../Button/hooks/useLogin';
import useInputForm from '../../../hooks/useInputForm';

const Login = () => {
  const emailInput = useInputForm();
  const passwordInput = useInputForm();
  const { isLoading, onClickLogin } = useLogin();

  const loginStyles: string =
    'before:content mt-5 w-3/4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';
  const otherAuthStyles: string =
    'border mt-5 w-3/4 py-2 px-4 text-gray-500 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';

  const blankButton = () => {
    toast.error('未実装です');
  };

  return (
    <div className="flex">
      <Toaster position="top-right" reverseOrder={false} />
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
          <LoginButton styles={otherAuthStyles} buttonAction={blankButton}>
            Googelで続行
          </LoginButton>
          <LoginButton styles={otherAuthStyles} buttonAction={blankButton}>
            Appleで続ける
          </LoginButton>

          <div className="bg-white w-3/4 h-3 mx-auto border-b-2 mt-5" />

          <input
            type="text"
            className="mt-5 border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="example@mail.sample.com"
            value={emailInput.input}
            onChange={emailInput.onChange}
          />

          <input
            type="password"
            className="mt-5 border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="パスワード"
            value={passwordInput.input}
            onChange={passwordInput.onChange}
          />

          <LoginButton
            styles={loginStyles}
            buttonAction={() =>
              onClickLogin(emailInput.input, passwordInput.input)
            }
          >
            {isLoading ? (
              <div className="mx-auto animate-spin h-5 w-5 border-4 border-gray-800 rounded-full border-t-transparent" />
            ) : (
              'ログイン'
            )}
          </LoginButton>

          <p className="mt-5 text-lg">
            <input type="checkbox" className="" />
            24時間ログインしたままにする。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
