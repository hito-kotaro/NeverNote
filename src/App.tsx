import React, { VFC } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from 'react-cookie';
import Router from './router/Router';
import './App.css';

const App: VFC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <CookiesProvider>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </CookiesProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
