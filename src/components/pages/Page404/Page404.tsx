import React from 'react';
import GeneralLayout from '../templates/GeneralLayout';
import Page404Body from '../../PageBody/Page404Body';

const Page404 = () => {
  return (
    <GeneralLayout title="お探しのページが見つかりませんでした">
      <Page404Body />
    </GeneralLayout>
  );
};

export default Page404;
