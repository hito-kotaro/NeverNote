import React, { VFC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useSidebarState from '../../../../hooks/useSidebarState';
import Button from '../../../Button/Button';
import BalloonTemplate from '../BalloonTemplate/BalloonTemplate';
import SearchWindow from './SearchWindow';

const SearchButton: VFC = () => {
  const { isOpen, setIsOpen } = useSidebarState();

  const toggelOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
      <BalloonTemplate balloonMsg="検索">
        <Button
          className="mr-0 inline-flex justify-center w-18 h-18 px-2 py-2 text-sm font-medium text-black bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          buttonAction={toggelOpen}
        >
          <AiOutlineSearch size="24" color="#4ade80" />
        </Button>
      </BalloonTemplate>

      {isOpen ? <SearchWindow /> : ''}
    </div>
  );
};

export default SearchButton;
