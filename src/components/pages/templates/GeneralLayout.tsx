import React, { ReactElement, VFC } from 'react';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Header from '../../Leyouts/Header';
import Footer from '../../Leyouts/Footer';

type Props = {
  title: string;
  children: ReactElement;
};

const Top: VFC<Props> = (props) => {
  const { title, children } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-col min-h-screen ">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Top;
