import React, { ReactElement, VFC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Top from '../components/pages/Top/Top';
import Login from '../components/pages/Login/Login';
import Mypage from '../components/pages/MyPage/MyPage';
import Page404 from '../components/pages/Page404/Page404';
import useAuth from '../hooks/useAuth';

const Router: VFC = (): ReactElement => {
  // ユーザーの認証状態を取得する関数
  const { fetchAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route
        path="/login"
        element={fetchAuth() ? <Navigate to="/mypage" /> : <Login />}
      />
      <Route
        path="/mypage"
        element={
          fetchAuth() ? (
            <div className="bg-gray-900">
              <Mypage />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
