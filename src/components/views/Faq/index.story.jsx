/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';

import content from './README.md';
import Demo from './__tests__/Demo';
import A from './__tests__/A';
import B from './__tests__/B';
import C from './__tests__/C';
import None from './__tests__/None';

storiesOf('⚙️ components|views//Faq', module)
  .add('README', () => <div />, { readme: { content } })
  .add('Demo', () => <Demo />);

storiesOf('⚙️ components|views/Faq/tests', module)
  .add('Test A', () => <A />)
  .add('Test B', () => <B />)
  .add('Test C', () => <C />)
  .add('No FAQs', () => <None />);
