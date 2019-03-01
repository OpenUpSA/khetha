/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray } from '../../helpers/randomizer';
import Onboarding from './index';


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
    completeCallback={() => console.log('completed!')}
  />
);


storiesOf('view.Onboarding', module)
  .add('Basic', basic);
