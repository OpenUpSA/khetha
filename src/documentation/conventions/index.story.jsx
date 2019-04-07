/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import javascript from './javascript.md';

const javascriptConfig = {
  readme: {
    content: javascript,
  },
};

storiesOf('📚 documentation|conventions', module)
  .add('JavaScript', () => <div />, javascriptConfig);
