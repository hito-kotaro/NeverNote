import React from 'react';
import logoBlackSmall from '../../../../images/logo_side_black_small.png';

const Footer = () => {
  return (
    <div className="bg-green-700 text-center mt-auto">
      <img
        src={logoBlackSmall}
        alt="logo"
        className="ml-5 w-[160px] h-[40px] mt-3 md:mx-auto"
      />
      <div className="mt-5">
        <div className="text-left ml-5 font-medium md:flex md:justify-center">
          <div>
            <a
              href="https://hitolog.blog/page-406/"
              className="hover:underline"
            >
              AboutMe
            </a>
          </div>
          <div>
            <a
              href="https://github.com/hito-kotaro/NeverNote"
              className="hover:underline md:ml-10"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://hitolog.blog/"
              className="hover:underline md:ml-10"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      <p className="block text-left ml-5  mx-auto mt-5 md:text-center">
        Copyright © 2022 kotaro All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
