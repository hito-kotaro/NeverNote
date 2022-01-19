import React, { ReactElement, VFC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Top from '../components/pages/Top/Top';
import Login from '../components/pages/Login/Login';
import Home from '../components/pages/Home';
import Note from '../components/pages/Note';
import Page404 from '../components/pages/Page404/Page404';

const Router: VFC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/note" element={<Note />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
