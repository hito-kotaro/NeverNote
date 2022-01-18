import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../../images/img404.jpeg';

const Page404Body = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-green-700 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </p>
            <p className="mb-3 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <Link to="/" className="underline hover:text-green-700">
              Go Back To The Top Page
            </Link>
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
  );
};

export default Page404Body;
