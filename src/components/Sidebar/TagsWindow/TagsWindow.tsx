import React, { VFC } from 'react';
import Button from '../../Button/Button';
import useMyPage from '../../../hooks/useMyPage';
import type NoteType from '../../../types/NoteType';

type Props = {
  tag: string | undefined;
  updateTag: (tagName: string) => void;
  notes: NoteType[];
  tags: string[];
  windowTitle: string;
  toggleOpen: () => void;
};

const TagsWindow: VFC<Props> = (props) => {
  const { updateTag, tags, toggleOpen, windowTitle } = props;
  const { setPageId } = useMyPage();

  const clickTag = (tagName: string) => {
    updateTag(tagName);
    setPageId('tags');
    toggleOpen();
  };
  return (
    <div
      className="absolute rounded-md p-2  top-0 left-14  bg-gray-800 w-96 h-2/3 overflow-y-scroll drop-shadow-md"
      id="is-scroll"
    >
      <div className="font-bold text-white">{windowTitle}</div>
      {tags.map((item: string) => {
        return (
          <Button
            className="flex mt-5 w-full bg-gray-700 rounded-md hover:bg-gray-500 p-2"
            buttonAction={() => clickTag(item)}
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

export default TagsWindow;
