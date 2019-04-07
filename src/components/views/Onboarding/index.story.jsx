/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Onboarding from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    translation: [
      {
        title: faker.commerce.productName(),
        description: faker.hacker.phrase(),
        primary: faker.hacker.verb(),
      },
      {
        title: faker.commerce.productName(),
        description: faker.hacker.phrase(),
        primary: faker.hacker.verb(),
        list: [null, null].map(() => ({
          title: faker.commerce.productName(),
          description: faker.hacker.phrase(),
        })),
      },
      {
        title: faker.commerce.productName(),
        description: faker.hacker.phrase(),
        primary: faker.hacker.verb(),
      },
    ],
  };
};


const basic = () => (
  <Onboarding
    {...createProps()}
    onCompleteOnboarding={() => console.log('completed!')}
  />
);


storiesOf('⚙️ components|views/Onboarding', module)
  .add('README', () => <div />, readmeConfig)
  .add('Basic', basic);
