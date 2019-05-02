import React from 'react';
import DefaultLayout from './DefaultLayout';

export default ({ name }) => (
  <DefaultLayout title="hey bulma">
    <div>
        Hello
      {' '}
      {name}
    </div>
  </DefaultLayout>
);
