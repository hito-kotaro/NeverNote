/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillDelete, AiFillSave, AiOutlineConsoleSql } from 'react-icons/ai';
import useInputForm from '../../hooks/useInputForm';
import currentNoteState from '../../store/currentNoteState';
import Button from '../Button/Button';
import useNotes from '../../hooks/useNotes';
import { createPutNoteInstance } from '../../libs/axiosInstance';
import useApiRequests from '../../hooks/useApiRequests';
import Loading from '../Loading/Loading';
import type NoteType from '../../types/NoteType';

type Props = {
  notes: NoteType[];
  currentNote: NoteType;
  setCurrentState: (note: NoteType) => void;
};

const NoteTextArea: VFC<Props> = (props) => {
  const [isDummy, setIsDummy] = useState(false);
  const { currentNote, setCurrentState, notes } = props;
  const titleChangeHandler = useInputForm();
  const descriptionChangeHandler = useInputForm();
  // const { notes } = useNotes();
  const { putNote, deleteNote, isLoading } = useApiRequests();

  const checkNotes = () => {
    if (notes.length > 0) setIsDummy(false);
    else setIsDummy(true);
  };
  useEffect(() => {
    checkNotes();
  }, []);

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
    console.log('putNote');
    setCurrentState(newData);
  };

  // currentNoteが更新されたらテキストエリアを初期化
  useEffect(() => {
    console.log('koko');
    console.log(currentNote);
    titleChangeHandler.initInput(currentNote.title);
    descriptionChangeHandler.initInput(currentNote.description);
  }, [currentNote]);

  // console.log('render:tetxtArea');
  const delNote = () => {
    console.log('clickdelButton');
    console.log(`Before:${notes.length}`);
    deleteNote(currentNote);
    console.log(`After:${notes.length}`);
  };

  // ノートを削除して、notesに変更があったらcurrentNoteを変更する
  useEffect(() => {
    // console.log('notes change');
    // console.log(notes);
    // console.log(notes[0]);

    const dummyNote: NoteType = {
      id: '-999',
      title: 'dummyNote',
      category: undefined,
      description: 'これはダミーノートです',
      date: '',
      mark_div: 0,
    };

    if (notes.length > 0) {
      setCurrentState(notes[0]);
      setIsDummy(false);
    } else {
      setCurrentState(dummyNote);
      setIsDummy(true);
    }
  }, [notes]);

  // useEffect(() => {
  //   console.log('getNote');
  //   getNotes();
  // }, [currentNote]);

  // useEffect(() => {
  //   titleChangeHandler.initInput(currentNote.title);
  //   descriptionChangeHandler.initInput(currentNote.description);
  // }, [currentNote]);

  // useEffect(() => {
  //   const newData: NoteType = {
  //     id: currentNote.id,
  //     title: titleChangeHandler.input,
  //     category: undefined,
  //     description: descriptionChangeHandler.input,
  //     date: undefined,
  //     mark_div: undefined,
  //   };
  //   console.log(newData);
  //   // putNote(newData);
  // }, [titleChangeHandler.input, descriptionChangeHandler.input]);

  return (
    <div className="bg-gray-900 w-full h-screen p-5 ">
      <Toaster position="top-right" reverseOrder={false} />

      {/* <Button className="" buttonAction={saveNote}>
    save
  </Button> */}
      {isLoading ? (
        <Loading />
      ) : isDummy ? (
        <div> これはダミーです。新しいノートをつかしてください</div>
      ) : (
        <>
          <div className="h-full w-full ">
            <div className="w-full mb-5  flex">
              <input
                onChange={titleChangeHandler.onChange}
                value={titleChangeHandler.input}
                className=" placeholder-white w-2/3 text-2xl bg-gray-900 text-white text-bold focus:outline-none "
                placeholder="タイトル"
              />
              <div className="flex w-1/3 justify-end">
                <Button
                  className=""
                  buttonAction={() => deleteNote(currentNote)}
                >
                  <AiFillDelete size="32" color="#4ade80" />
                </Button>
                <Button className="" buttonAction={saveNote}>
                  <AiFillSave size="32" color="#4ade80" />
                </Button>
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
          </div>
        </>
      )}
    </div>
  );
};

export default NoteTextArea;
