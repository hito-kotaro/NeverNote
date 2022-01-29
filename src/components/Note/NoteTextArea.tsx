import React from 'react';
import { useRecoilState } from 'recoil';
import pageIdState from '../../store/currentNoteState';

const NoteTextArea = () => {
  const [currentNote, setCurrentState] = useRecoilState(pageIdState);

  return (
    <div className="bg-gray-900 w-full h-screen p-5 ">
      {/* <Button className="" buttonAction={saveNote}>
    save
  </Button> */}
      <div className="h-full">
        <div className="w-full mb-5">
          <input
            // onChange={titleChangeHandler.onChange}
            defaultValue={currentNote.title}
            className=" placeholder-white w-full text-2xl bg-gray-900 text-white text-bold focus:outline-none"
            placeholder="タイトル"
          />
        </div>
        <div className="h-5/6">
          <textarea
            // onChange={descriptionChangeHandler.onChangeTextArea}
            defaultValue={currentNote.description}
            className="text-white placeholder-white w-full h-full overflow-y-scroll is-scroll-900 resize-none bg-gray-900 is-scroll-900  focus:outline-none"
            placeholder="本文"
          />
        </div>
        {/* <div classame="bg-red-200">test</div> */}
      </div>
    </div>
  );
};

export default NoteTextArea;
