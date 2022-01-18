import React from 'react';
import Button from '../Button/Button';
import Header from './Top/components/Header';
import Footer from './Top/components/Footer';
import img404 from '../../images/img404.jpeg';

const Page404 = () => {
  const msg: string = 'Page Not Found';
  const homeButton: string =
    'ring-2 ring-green-700 text-green-700 hover:text-green-500 hover:ring-2 hover:ring-green-500 mt-5 py-5 px-10 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
            </div>
            <div className="mt-4">
              <img
                src={img404}
                alt="img"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black flex">
        <img src={bg404} alt="bg_404" className="mx-auto" />
      </div> */}
      <Footer />
    </div>
  );
};

export default Page404;
