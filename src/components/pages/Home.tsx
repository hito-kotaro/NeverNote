import React, { VFC, useEffect, useState } from 'react';
import useApiRequests from '../../hooks/useApiRequests';
// import type Note from '../../types/Note';
import useResponsive from '../../hooks/useResponsive';
import Sidebar from '../Sidebar/Sidebar';
import Note from '../Note/Note';
import homeBg from '../../images/home_bg_middle3.png';
import Button from '../Button/Button';

const Home = () => {
  const { query } = useResponsive();
  const { getNotes, getStatus, postNote } = useApiRequests();
  const userName = localStorage.getItem('userName');
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="flex h-full ">
      <Sidebar />
      <div id="home-main" className="h-full w-full   ">
        {query.isLaptop ? (
          <div className="">
            <div className=" px-5 flex justify-end">
              <p className="font-bold text-gray-800">
                {userName}さん。お疲れ様です。
              </p>
            </div>
            {/* <div className="h-screen "> */}
            <div className=" mx-5 ">
              <div className="mt-10 drop-shadow-md border-2 w-full p-2 rounded-md">
                <div className="text-green-500 font-bold underline">
                  最近使用したノート
                </div>
                <div className="mt-3 mx-auto flex overflow-x-auto">
                  <Note>note</Note>
                </div>
              </div>

              <div className="flex my-3 ">
                <div className="mt-5 mr-2 border-2 p-2 rounded-md w-1/3 drop-shadow-md ">
                  <div className="text-green-500 font-bold underline ">
                    スクラッチ
                    <div className="mt-3 mx-auto h-full">
                      <textarea className="w-full h-full bg-red-300" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 mx-auto border-2 p-2 rounded-md w-2/3 ">
                  <div className="text-green-500 font-bold underline">
                    お気に入りのノート
                  </div>
                  <div className="mt-3 mx-auto  flex overflow-x-auto">
                    <Note>note</Note>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white">test</div> */}
          </div>
        ) : (
          // </div>
          ''
        )}
      </div>
    </div>
  );
};

export default Home;
