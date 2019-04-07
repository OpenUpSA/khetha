/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import { names } from '../../../data/constants/icons/index.json';
import { randomLengthBlankArray, randomNumber } from '../../../helpers/functions/randomizer';
import Progress from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

const namesLength = names.length < 1 ? 1 : names.length - 1;


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
    onMenuButtonPress: console.log,
    onCardPress: console.log,
    tasks: randomLengthBlankArray(1, 30).map((value, index) => ({
      id: index,
      title: faker.commerce.productName(),
      icon: names[randomNumber(0, namesLength)],
      progress: randomNumber(0, 100),
    })),
  };
};


const basic = () => <Progress {...createProps()} />;


storiesOf('⚙️ components|views/Progress', module)
  .add('README', () => <div />, readmeConfig)
  .add('Basic', basic);
