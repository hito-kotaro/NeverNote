import React, { useState, useCallback } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    [input, setInput],
  );

  const initInput = (initData: string | undefined) => {
    setInput(initData ?? '');
  };

  return {
    input,
    onChange,
    initInput,
  };
};

export default useInputForm;
