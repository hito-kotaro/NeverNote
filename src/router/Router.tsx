import React, { ReactElement, VFC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Top from '../components/pages/Top/Top';
import Login from '../components/pages/Login/Login';
import Home from '../components/pages/Home/Home';
import Note from '../components/pages/Note';
import Mypage from '../components/pages/MyPage/MyPage';
import Page404 from '../components/pages/Page404/Page404';
import useAuth from '../hooks/useAuth';

const Router: VFC = (): ReactElement => {
  const { fetchAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route
        path="/login"
        element={fetchAuth() ? <Navigate to="/mypage" /> : <Login />}
      />
      {/* <Route
        path="/home"
        element={
          fetchAuth() ? (
            <div className="bg-gray-900">
              <Home />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      /> */}
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
      <Route
        path="/note"
        element={fetchAuth() ? <Note /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
