import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AiFillDelete } from 'react-icons/ai';
import useInputForm from '../../hooks/useInputForm';
import pageIdState from '../../store/currentNoteState';
import Button from '../Button/Button';
import { createPutNoteInstance } from '../../libs/axiosInstance';
import useApiRequests from '../../hooks/useApiRequests';
import type NoteType from '../../types/Note';

const NoteTextArea = () => {
  const titleChangeHandler = useInputForm();
  const descriptionChangeHandler = useInputForm();
  const { putNote } = useApiRequests();
  const [currentNote, setCurrentState] = useRecoilState(pageIdState);
  const [testCurrent, setTestCurrent] = useState(currentNote.title);

  useEffect(() => {
    titleChangeHandler.initInput(currentNote.title);
    descriptionChangeHandler.initInput(currentNote.description);
  }, [currentNote]);

  useEffect(() => {
    const newData: NoteType = {
      id: currentNote.id,
      title: titleChangeHandler.input,
      category: undefined,
      description: descriptionChangeHandler.input,
      date: undefined,
      mark_div: undefined,
    };
    putNote(newData);
  }, [titleChangeHandler.input, descriptionChangeHandler.input]);

  const testAction = () => {
    console.log(currentNote);
  };

  const saveNote = () => {
    const newData: NoteType = {
      id: currentNote.id,
      title: titleChangeHandler.input,
      category: undefined,
      description: descriptionChangeHandler.input,
      date: undefined,
      mark_div: undefined,
    };

    putNote(newData);
    console.log(newData);
  };

  return (
    <div className="bg-gray-900 w-full h-screen p-5 ">
      {/* <Button className="" buttonAction={saveNote}>
    save
  </Button> */}
      <div className="h-full w-full ">
        <div className="w-full mb-5  flex">
          <input
            onChange={titleChangeHandler.onChange}
            value={titleChangeHandler.input}
            className=" placeholder-white w-2/3 text-2xl bg-gray-900 text-white text-bold focus:outline-none "
            placeholder="タイトル"
          />
          <div className="flex w-1/3 justify-end">
            <AiFillDelete size="24" color="#4ade80" />
          </div>
        </div>
        <div className="h-5/6">
          <textarea
            onChange={descriptionChangeHandler.onChangeTextArea}
            value={descriptionChangeHandler.input}
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
