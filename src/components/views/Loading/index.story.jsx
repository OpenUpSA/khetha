/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

const basic = () => <Loading />;


storiesOf('⚙️ components|views/Loading', module)
  .add('README', () => <div />, readmeConfig)
  .add('Basic', basic);
