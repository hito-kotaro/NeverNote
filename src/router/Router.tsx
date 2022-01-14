import React, { ReactElement, VFC } from 'react';
import { Route, Routes } from 'react-router-dom';
import TestPage from '../components/pages/TestPage';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import Note from '../components/pages/Note';
import Page404 from '../components/pages/Page404';

const Router: VFC = (): ReactElement => {
  const test: string = 'test';

  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/note" element={<Note />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
