import React, { ReactElement, VFC } from 'react';
import { NavigateFunction } from 'react-router-dom';

type Props = {
  children: string | ReactElement;
  className: string;
  buttonAction?: () => void | Promise<void> | NavigateFunction;
};

const Button: VFC<Props> = (props) => {
  const { children, className, buttonAction } = props;
  return (
    <button type="button" className={className} onClick={buttonAction}>
      {children}
    </button>
  );
};

export default Button;
