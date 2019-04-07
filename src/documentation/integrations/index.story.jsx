/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import travis from './travis.md';

const travisConfig = {
  readme: {
    content: travis,
  },
};

storiesOf('📚 documentation|integrations', module)
  .add('Travis', () => <div />, travisConfig);
