import React, { VFC, useEffect, ReactElement } from 'react';
import useApiRequests from '../../../hooks/useApiRequests';
import Sidebar from '../../Leyouts/Sidebar';

type Props = {
  tag: string | undefined;
  updateTag: (tagName: string) => void;
  children: ReactElement;
};

const HomeLayout: VFC<Props> = (props) => {
  const { tag, updateTag, children } = props;
  const { fetchNotes } = useApiRequests();

  useEffect(() => {
    void fetchNotes();
  }, []);

  return (
    <div className="flex h-full ">
      <Sidebar tag={tag} updateTag={updateTag} />
      {children}
    </div>
  );
};

export default HomeLayout;
