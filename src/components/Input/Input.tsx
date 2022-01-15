import React, { VFC } from 'react';

type Props = {
  type: string;
  styles: string;
  placeholder: string;
};

const Input: VFC<Props> = (props) => {
  const { type, styles, placeholder } = props;
  return <input type={type} className={styles} placeholder={placeholder} />;
};

export default Input;
