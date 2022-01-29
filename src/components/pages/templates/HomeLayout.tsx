import React, { VFC, useEffect, ReactElement } from 'react';
import useApiRequests from '../../../hooks/useApiRequests';
import Sidebar from '../../Leyouts/Sidebar';

type Props = {
  children: ReactElement;
};

const HomeTmplate: VFC<Props> = (props) => {
  const { children } = props;
  const { getNotes } = useApiRequests();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="flex h-full ">
      <Sidebar />
      {children}
      {/* <div id="home-main" className="h-full w-full mx-auto bg-red-200">
      </div> */}
    </div>
  );
};

export default HomeTmplate;
