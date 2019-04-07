/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import content from './README.md';

const readmeConfig = {
  info: {
    text: '1111',
    inline: true,
  },
  readme: {
    content,
  },
};

storiesOf('📡 redux|store', module).add('README', () => <div />, readmeConfig);
