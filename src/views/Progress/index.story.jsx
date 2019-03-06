/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { names } from '../../config/icons';
import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';
import Progress from './index';


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


storiesOf('view.Progress', module)
  .add('Basic', basic);
