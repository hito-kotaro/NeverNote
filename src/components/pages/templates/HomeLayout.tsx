import React, { VFC, useEffect, ReactElement } from 'react';
import useApiRequests from '../../../hooks/useApiRequests';
import Sidebar from '../../Leyouts/Sidebar';

type Props = {
  updateCategory: (categoryName: string) => void;
  children: ReactElement;
};

const HomeLayout: VFC<Props> = (props) => {
  const { updateCategory, children } = props;
  const { fetchNotes } = useApiRequests();

  useEffect(() => {
    void fetchNotes();
  }, []);

  return (
    <div className="flex h-full ">
      <Sidebar updateCategory={updateCategory} />
      {children}
    </div>
  );
};

export default HomeLayout;
