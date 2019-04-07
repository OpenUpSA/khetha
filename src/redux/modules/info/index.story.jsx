/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('📡 redux|modules/info', module).add('README', () => <div />, readmeConfig);
