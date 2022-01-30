import React, { VFC } from 'react';
import useResponsive from '../../hooks/useResponsive';
import NoteListVerticle from '../Note/NoteListVerticle';
import NoteTextArea from '../Note/NoteTextArea';

const NoteListBody: VFC = () => {
  const { query } = useResponsive();

  return (
    <>
      {query.isLaptop ? (
        // <>
        <div className="flex w-full">
          <NoteListVerticle />
          <NoteTextArea />
        </div>
      ) : (
        // </>
        // ここにスマホ用の記述
        ''
      )}
    </>
  );
};

export default NoteListBody;
