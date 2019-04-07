/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { object, number } from '@storybook/addon-knobs';

import { a } from './test.data';
import Faq from '../index';

const passedProps = {
  points: number('points', a.number),
  faqs: object('faqs', a.faqs),
};

const Demo = () => <Faq {...passedProps} />;

export default Demo;
