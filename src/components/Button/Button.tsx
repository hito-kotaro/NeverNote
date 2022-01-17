import React, { VFC } from 'react';

type Props = {
  children: any;
  className: string;
  buttonAction?: () => Promise<void> | void;
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
