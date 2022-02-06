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
import SidebarButton from './SidebarButton';
import useApiRequests from '../../hooks/useApiRequests';
import useSearchNote from '../../hooks/useSearchNote';
import useMyPage from '../../hooks/useMyPage';
import useFavoriteWindow from '../../hooks/useFavoriteWindow';
import SearchWindow from './Search/SearchWindow';
import FavoritesWindow from './Favorite/FavoritesWindow';

const SidebarButtonList = () => {
  const { setPageId } = useMyPage();
  const { createNote } = useApiRequests();
  const { toggelOpen, isOpen } = useSearchNote();
  const { favoriteIsOpen, favoriteWindowToggleOpen } = useFavoriteWindow();

  const dummy = () => {
    console.log('empty');
  };

  return (
    <>
      <hr className=" my-5 mx-2 sidebar-hr" />
      <SidebarButton
        balloonMsg="検索"
        buttonAction={toggelOpen}
        isOpen={isOpen}
        openWindow={<SearchWindow toggelOpen={toggelOpen} />}
      >
        <AiOutlineSearch size="32" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="新しいノート" buttonAction={createNote}>
        <AiOutlinePlus size="32" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="ホーム" buttonAction={() => setPageId('home')}>
        <AiFillHome size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="ノート" buttonAction={() => setPageId('note')}>
        <RiStickyNoteFill size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton
        balloonMsg="お気に入り"
        buttonAction={favoriteWindowToggleOpen}
        isOpen={favoriteIsOpen}
        openWindow={<FavoritesWindow toggleOpen={favoriteWindowToggleOpen} />}
      >
        <AiFillStar size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="タグ" buttonAction={dummy} isOpen={false}>
        <AiFillTags size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="ゴミ箱" buttonAction={dummy} isOpen={false}>
        <AiFillDelete size="24" color="#4ade80" />
      </SidebarButton>

      <hr className=" mx-2 sidebar-hr" />
    </>
  );
};

export default SidebarButtonList;
