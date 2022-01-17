import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Top = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Top;
