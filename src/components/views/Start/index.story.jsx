/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { sentence } from 'change-case';

import { randomLengthBlankArray, randomNumber } from '../../../helpers/functions/randomizer';
import Start from './index';
import { names } from '../../../data/constants/icons/index.json';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

const createProps = (noTasks, seed) => {
  if (seed) {
    faker.seed(seed);
  }

  const namesLength = names.length < 1 ? 1 : names.length - 1;

  return {
    points: randomNumber(0, 110),
    tasks: noTasks ? [] : randomLengthBlankArray(1, 30).map((value, index) => ({
      id: index,
      points: randomNumber(1, 8),
      title: faker.commerce.productName(),
      description: faker.hacker.phrase(),
      icon: names[randomNumber(0, namesLength)],
      amountOfQuestions: randomNumber(1, 8),
    })),
    rewards: randomLengthBlankArray(1, 10).map(() => ({
      id: faker.random.uuid(),
      points: randomNumber(0, 100),
      title: faker.commerce.productName(),
      description: faker.hacker.phrase(),
      dates: randomLengthBlankArray(0, 10).map(() => faker.date.between('2018-01-01', '2020-01-01')),
    })),
    translation: {
      points: faker.commerce.department(),
      filter: {
        title: faker.commerce.productName(),
        active: faker.commerce.productName(),
        difficulty: [null, null, null, null, null].map(() => faker.commerce.department()),
      },
      more: {
        title: faker.commerce.productName(),
        description: faker.hacker.phrase(),
      },
      rewards: {
        qualify: ({ nextDraw }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} in ${nextDraw}!`,
        noQualify: ({ nextDraw, remaining }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} ${remaining} points for ${nextDraw}`,
      },
    },
  };
};


const basic = () => <Start {...createProps()} onCardPress={console.log} />;
const noTasks = () => <Start {...createProps(true)} onCardPress={console.log} />;


storiesOf('⚙️ components|views/Start', module)
  .add('README', () => <div />, readmeConfig)
  .add('Basic', basic)
  .add('No tasks', noTasks);
