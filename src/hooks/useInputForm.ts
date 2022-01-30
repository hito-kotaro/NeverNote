import React, { useState, useCallback } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [input, setInput],
  );

  const onChangeTextArea = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setInput(e.target.value);
    },
    [input, setInput],
  );

  const clearInput = () => {
    setInput('');
  };

  const initInput = (initData: any) => {
    setInput(initData);
  };

  return { onChange, onChangeTextArea, input, clearInput, initInput };
};

export default useInputForm;
