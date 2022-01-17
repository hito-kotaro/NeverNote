import React from 'react';
import { Link } from 'react-router-dom';
import logoBlackSmall from '../../../../images/logo_side_black_small.png';

const Footer = () => {
  return (
    <div className="bg-green-700 mt-auto text-center">
      <img
        src={logoBlackSmall}
        alt="logo"
        className=" mt-5 mx-auto w-[160px] h-[40px]"
      />
      <div className="flex mt-5">
        <div className="mx-auto font-medium">
          <Link to="/" className="hover:underline">
            AboutMe
          </Link>
          <Link to="/" className="ml-20 hover:underline">
            GitHub
          </Link>
          <Link to="/" className="ml-20 hover:underline">
            Blog
          </Link>
        </div>
      </div>

      <p className="block mx-auto mt-5">
        Copyright © 2022 kotaro All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
