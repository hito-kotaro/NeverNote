/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, VFC } from 'react';
import dayjs from 'dayjs';
import { Toaster } from 'react-hot-toast';
import { useDebounce } from 'use-debounce';
import { AiFillDelete, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import useInputForm from '../../hooks/useInputForm';
import Button from '../Button/Button';
import useApiRequests from '../../hooks/useApiRequests';
import NoteEmptyDisplay from './NoteEmptyDisplay';
import Loading from '../Loading/Loading';
import type NoteType from '../../types/NoteType';

type Props = {
  notes: NoteType[];
  currentNote: NoteType;
  updateCurrentNote: (note: NoteType) => void;
};

const NoteTextArea: VFC<Props> = (props) => {
  const { currentNote, updateCurrentNote, notes } = props;
  const titleChangeHandler = useInputForm();
  const descriptionChangeHandler = useInputForm();
  const { saveNote, deleteNote, isLoading } = useApiRequests();
  const [titleValue] = useDebounce(titleChangeHandler.input, 1000);
  const [descriptionValue] = useDebounce(descriptionChangeHandler.input, 1000);

  // 追加/削除前のnotesの長さを保持する
  const preNoteLength = useRef<number>(notes.length);

  // ノートが0の時に仮で入れておくnote
  const dummyNote: NoteType = {
    id: '-999',
    title: 'dummyNote',
    category: undefined,
    description: '',
    date: '',
    mark_div: 0,
  };

  // mark_divの更新
  const changeMark = (newMark: number) => {
    const newNote: NoteType = {
      id: currentNote.id,
      title: titleChangeHandler.input,
      category: undefined,
      description: currentNote.description,
      date: dayjs().format('YYYY/MM/DD'),
      mark_div: newMark,
    };
    saveNote(newNote);
  };

  // 本文が変更された時に更新
  useEffect(() => {
    const newNote: NoteType = {
      id: currentNote.id,
      title: titleChangeHandler.input,
      category: undefined,
      description: descriptionChangeHandler.input,
      date: dayjs().format('YYYY/MM/DD'),
      mark_div: currentNote.mark_div,
    };

    saveNote(newNote);
  }, [descriptionValue]);

  // タイトルが変更された時に更新
  useEffect(() => {
    const newNote: NoteType = {
      id: currentNote.id,
      title: titleChangeHandler.input,
      category: undefined,
      description: currentNote.description,
      date: dayjs().format('YYYY/MM/DD'),
      mark_div: currentNote.mark_div,
    };
    saveNote(newNote);
  }, [titleValue]);

  // currentNoteが更新されたらテキストエリアを初期化
  useEffect(() => {
    titleChangeHandler.initInput(currentNote.title);
    descriptionChangeHandler.initInput(currentNote.description);
  }, [currentNote]);

  // noteが追加/削除された時にcurrentNoteを変更する。
  useEffect(() => {
    // 削除されてた場合の判定
    if (preNoteLength.current > notes.length) {
      if (notes.length > 0) {
        updateCurrentNote(notes[0]);
      } else {
        updateCurrentNote(dummyNote);
      }
    }
    // 一つ前の状態を更新
    preNoteLength.current = notes.length;
  }, [notes.length]);

  // mark_divが-1になった時に、VerticleListから削除する
  useEffect(() => {
    // 削除されてた場合の判定
    if (preNoteLength.current > notes.length) {
      if (notes.length > 0) {
        updateCurrentNote(notes[0]);
      } else {
        updateCurrentNote(dummyNote);
      }
    }
    // 一つ前の状態を更新
    preNoteLength.current = notes.length;
  }, [currentNote.mark_div]);

  return (
    <div className="bg-gray-900 w-full h-screen p-5 ">
      <Toaster position="top-right" reverseOrder={false} />
      {notes.length > 0 ? (
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
                <div className="text-white font-bold">
                  {currentNote.mark_div}
                </div>
                <Button
                  className=""
                  buttonAction={() => deleteNote(currentNote)}
                >
                  <AiFillDelete size="32" color="#4ade80" />
                </Button>

                {currentNote.mark_div === 1 ? (
                  <Button className="" buttonAction={() => changeMark(0)}>
                    <AiFillStar size="32" color="#4ade80" />
                  </Button>
                ) : (
                  <Button className="" buttonAction={() => changeMark(1)}>
                    <AiOutlineStar size="32" color="#4ade80" />
                  </Button>
                )}

                {isLoading ? (
                  <div className="h-8 w-8">
                    <Loading className="mx-auto animate-spin h-8 w-8 border-8 border-gray-600 rounded-full border-t-transparent" />
                  </div>
                ) : (
                  <div className="bg-gray-900 h-8 w-8"> </div>
                )}
              </div>
            </div>
            <div className="h-5/6">
              <textarea
                onChange={descriptionChangeHandler.onChange}
                value={descriptionChangeHandler.input}
                className="text-white placeholder-white w-full h-full overflow-y-scroll is-scroll-900 resize-none bg-gray-900 is-scroll-900  focus:outline-none"
                placeholder="本文"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="mt-40">
          <NoteEmptyDisplay />
        </div>
      )}
    </div>
  );
};

export default NoteTextArea;
