/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { VFC } from 'react';
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHome,
  AiFillStar,
  AiFillTags,
} from 'react-icons/ai';
import { RiStickyNoteFill } from 'react-icons/ri';
import SidebarButton from './SidebarButton';
import useApiRequests from '../../hooks/useApiRequests';
import useSearchNote from '../../hooks/useSearchNote';
import useMyPage from '../../hooks/useMyPage';
import useSubWindow from '../../hooks/useSubWindow';
import useNotes from '../../hooks/useNotes';
import useCategoryWindow from '../../hooks/useCategoryWindow';
import SearchWindow from './Search/SearchWindow';
import SubWindow from './SubWindow/SubWindow';
import CategoryWindow from './CategoryWindow/CategoryWindow';
import type NoteType from '../../types/NoteType';

type Props = {
  updateCategory: (categoryName: string) => void;
};

const SidebarButtonList: VFC<Props> = (props) => {
  const { updateCategory } = props;
  const { notes } = useNotes();
  const { setPageId } = useMyPage();
  const { createNote } = useApiRequests();
  const { toggelOpen, isOpen } = useSearchNote();
  const categoryWindow = useCategoryWindow();
  const favoritSubWindow = useSubWindow();
  const tmpCategorys: string[] = notes.map((note: NoteType) => note.category);
  const categories: string[] = [];
  const markDiv = {
    isFavorite: 1,
  };

  const initCategories = () => {
    tmpCategorys.map((item) => {
      if (!categories.includes(item)) categories.push(item);
    });
  };

  const favoriteNotes = notes.filter((note: NoteType) => {
    return note.mark_div === markDiv.isFavorite;
  });

  initCategories();

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
            windowTitle="お気に入り"
            notes={favoriteNotes}
            toggleOpen={favoritSubWindow.toggleIsOpen}
          />
        }
      >
        <AiFillStar size="24" color="#4ade80" />
      </SidebarButton>

      <SidebarButton
        balloonMsg="タグ"
        buttonAction={categoryWindow.toggleIsOpen}
        isOpen={categoryWindow.isOpen}
        openWindow={
          <CategoryWindow
            updateCategory={updateCategory}
            notes={notes}
            windowTitle="タグ"
            categories={categories}
            toggleOpen={categoryWindow.toggleIsOpen}
          />
        }
      >
        <AiFillTags size="24" color="#4ade80" />
      </SidebarButton>
      <hr className=" mx-2 sidebar-hr" />
    </>
  );
};

export default SidebarButtonList;
