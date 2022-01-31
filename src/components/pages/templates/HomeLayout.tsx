import React, { VFC, useEffect, ReactElement } from 'react';
import useApiRequests from '../../../hooks/useApiRequests';
import Sidebar from '../../Leyouts/Sidebar';

type Props = {
  children: ReactElement;
};

const HomeLayout: VFC<Props> = (props) => {
  const { children } = props;
  const { fetchNotes } = useApiRequests();

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="flex h-full ">
      <Sidebar />
      {children}
    </div>
  );
};

export default HomeLayout;
