import React, { VFC, useState } from 'react';

type Props = {
  type: string;
  styles: string;
  placeholder: string;
};

const Input: VFC<Props> = (props) => {
  const [input, setInput] = useState('');
  const { type, styles, placeholder } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      type={type}
      className={styles}
      placeholder={placeholder}
      value={input}
      onChange={onChange}
    />
  );
};

export default Input;
