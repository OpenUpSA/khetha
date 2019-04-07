/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import components from './components.md';

const componentsConfig = {
  readme: {
    content: components,
  },
};

storiesOf('📚 documentation|folders', module)
  .add('Folders', () => <div />, componentsConfig);
