import React, { VFC } from 'react';
import Button from '../../Button/Button';
import useMyPage from '../../../hooks/useMyPage';
import type NoteType from '../../../types/NoteType';

type Props = {
  updateCategory: (categoryName: string) => void;
  notes: NoteType[];
  categories: string[];
  windowTitle: string;
  toggleOpen: () => void;
};

const CategoryWindow: VFC<Props> = (props) => {
  const { updateCategory, categories, toggleOpen, windowTitle } = props;
  const { setPageId } = useMyPage();

  const clickTCategory = (categoryName: string) => {
    updateCategory(categoryName);
    setPageId('category');
    toggleOpen();
  };
  return (
    <div
      className="absolute rounded-md p-2  top-0 left-14  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
      id="is-scroll"
    >
      <div className="font-bold text-white">{windowTitle}</div>
      {categories.map((item: string) => {
        return (
          <Button
            className="flex mt-5 w-full bg-gray-700 rounded-md hover:bg-gray-500 p-2"
            buttonAction={() => clickTCategory(item)}
            key={item}
          >
            <>
              <div className="text-white font-bold overflow-x-hidden">
                {item}
              </div>
            </>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryWindow;
