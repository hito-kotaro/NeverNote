import React, { useState, useEffect, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { Toaster } from 'react-hot-toast';
import { AiFillDelete, AiFillSave } from 'react-icons/ai';
import useInputForm from '../../hooks/useInputForm';
import currentNoteState from '../../store/currentNoteState';
import Button from '../Button/Button';
import useNotes from '../../hooks/useNotes';
import { createPutNoteInstance } from '../../libs/axiosInstance';
import useApiRequests from '../../hooks/useApiRequests';
import Loading from '../Loading/Loading';
import type NoteType from '../../types/NoteType';

const NoteTextArea: VFC = () => {
  const [currentNote, setCurrentState] = useRecoilState(currentNoteState);
  const titleChangeHandler = useInputForm();
  const descriptionChangeHandler = useInputForm();
  const { notes } = useNotes();
  const { putNote, deleteNote, getNotes, fetchNotes, isLoading } =
    useApiRequests();

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
    console.log(`DelAfter:${notes[0].id}`);
    setCurrentState(notes[0]);
    console.log(`set:${notes[0].id}`);
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
                <Button className="" buttonAction={delNote}>
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
