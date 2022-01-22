import React, { ReactElement, VFC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Top from '../components/pages/Top/Top';
import Login from '../components/pages/Login/Login';
import Logout from '../components/pages/Logout/Logout';
import Home from '../components/pages/Home';
import Note from '../components/pages/Note';
import Page404 from '../components/pages/Page404/Page404';
import useAuth from '../hooks/useAuth';

const Router: VFC = (): ReactElement => {
  const { fetchAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route
        path="/login"
        element={fetchAuth() ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/home"
        element={fetchAuth() ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/note"
        element={fetchAuth() ? <Note /> : <Navigate to="/login" replace />}
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
