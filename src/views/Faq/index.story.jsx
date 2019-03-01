/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';
import Faq from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
    faqs: randomLengthBlankArray(1, 10).map((value, index) => ({
      title: `${faker.commerce.department()} ${index}`,
      body: faker.lorem.paragraphs(),
    })),
  };
};


const basic = () => <Faq {...createProps()} />;


storiesOf('view.Faq', module)
  .add('Basic', basic);
