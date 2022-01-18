import React, { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './router/Router';
import './App.css';

const App: VFC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
