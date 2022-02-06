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
import useSubWindow from '../../hooks/useSubWindow';
import useNotes from '../../hooks/useNotes';
import SearchWindow from './Search/SearchWindow';
import SubWindow from './SubWindow/SubWindow';
import type NoteType from '../../types/NoteType';

const SidebarButtonList = () => {
  const { notes } = useNotes();
  const { setPageId } = useMyPage();
  const { createNote } = useApiRequests();
  const { toggelOpen, isOpen } = useSearchNote();
  // const { subWindowIsOpen, toggleIsOpen } = useSubWindow();
  const favoritSubWindow = useSubWindow();
  const deletedSubWindow = useSubWindow();

  const dummy = () => {
    console.log('empty');
  };
  const deletedNotes = notes.filter((note: NoteType) => {
    return note.mark_div === -1;
  });
  const favoriteNotes = notes.filter((note: NoteType) => {
    return note.mark_div === 1;
  });

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
        buttonAction={favoritSubWindow.toggleIsOpen}
        isOpen={favoritSubWindow.subWindowIsOpen}
        openWindow={
          <SubWindow
            notes={favoriteNotes}
            toggleOpen={favoritSubWindow.toggleIsOpen}
          />
        }
      >
        <AiFillStar size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton balloonMsg="タグ" buttonAction={dummy} isOpen={false}>
        <AiFillTags size="24" color="#4ade80" />
      </SidebarButton>

      <hr className=" mx-2 sidebar-hr" />
    </>
  );
};

export default SidebarButtonList;
