import React, { VFC } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../../Leyouts/Header';
import Footer from '../../Leyouts/Footer';

type Props = {
  children: any;
};

const Top: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Top;
