import React, { useState, useCallback } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    [input, setInput],
  );

  const initInput = useCallback(
    (initData: string | undefined) => {
      setInput(initData ?? '');
    },
    [input],
  );

  return {
    input,
    onChange,
    initInput,
  };
};

export default useInputForm;
