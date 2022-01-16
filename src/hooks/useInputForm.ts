import React, { useState, useCallback } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [],
  );
  return { onChange, input };
};

export default useInputForm;
