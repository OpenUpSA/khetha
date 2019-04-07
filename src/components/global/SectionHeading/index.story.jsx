/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import SectionHeading from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('⚙️ components|global/SectionHeading', module)
  .add('README', () => <div />, readmeConfig);

const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    text: faker.commerce.productName(),
  };
};


const basic = () => <SectionHeading {...createProps()} />;


storiesOf('⚙️ components|global/SectionHeading/tests', module)
  .add('Basic', basic);
