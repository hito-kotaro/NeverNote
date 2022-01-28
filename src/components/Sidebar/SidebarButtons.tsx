import React from 'react';
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHome,
  AiFillStar,
  AiFillTags,
  AiFillDelete,
} from 'react-icons/ai';
import { RiStickyNoteFill } from 'react-icons/ri';
import SidebarCommonButton from './SidebarCommonButton';
import SearchWindow from './Search/SearchWindow';
import useSearchNote from '../../hooks/useSearchNote';

const SidebarButtons = () => {
  const { toggelOpen, isOpen } = useSearchNote();

  const dummy = () => {
    console.log('click sidebar button');
  };
  return (
    <>
      <hr className=" my-5 mx-2 sidebar-hr" />
      <SidebarCommonButton
        balloonMsg="検索"
        buttonAction={toggelOpen}
        isOpen={isOpen}
        openWindow={<SearchWindow />}
      >
        <AiOutlineSearch size="32" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="新しいノート"
        buttonAction={dummy}
        isOpen={false}
      >
        <AiOutlinePlus size="32" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="ホーム"
        buttonAction={dummy}
        isOpen={false}
      >
        <AiFillHome size="24" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="ノート"
        buttonAction={dummy}
        isOpen={false}
      >
        <RiStickyNoteFill size="24" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="お気に入り"
        buttonAction={dummy}
        isOpen={false}
      >
        <AiFillStar size="24" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="タグ"
        buttonAction={dummy}
        isOpen={false}
      >
        <AiFillTags size="24" color="#4ade80" />
      </SidebarCommonButton>

      <SidebarCommonButton
        balloonMsg="ゴミ箱"
        buttonAction={dummy}
        isOpen={false}
      >
        <AiFillDelete size="24" color="#4ade80" />
      </SidebarCommonButton>

      <hr className=" mx-2 sidebar-hr" />
    </>
  );
};

export default SidebarButtons;
