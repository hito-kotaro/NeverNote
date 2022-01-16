import React, { VFC } from 'react';

type Props = {
  children: any;
  styles: string;
  buttonAction?: () => Promise<void> | void;
};

const LoginButton: VFC<Props> = (props) => {
  const { children, styles, buttonAction } = props;
  return (
    <button type="button" className={styles} onClick={buttonAction}>
      {children}
    </button>
  );
};

export default LoginButton;
