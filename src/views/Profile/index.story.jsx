/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { sentence } from 'change-case';


import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';
import Profile from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  const rewards = randomLengthBlankArray(1, 10).map(() => ({
    id: faker.random.uuid(),
    points: randomNumber(0, 100),
    title: faker.commerce.productName(),
    description: faker.hacker.phrase(),
    dates: randomLengthBlankArray(0, 10).map(() => faker.date.between('2018-01-01', '2020-01-01')),
  }));

  const rewardsIndex = rewards.length < 1 ? 0 : rewards.length - 1;

  const winners = randomLengthBlankArray(1, 20).map(() => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    points: randomNumber(0, 110),
    prize: rewards[randomNumber(0, rewardsIndex)].id,
  }));

  return {
    points: randomNumber(0, 110),
    translation: {
      help: {
        title: `${faker.commerce.productName()}?`,
        primary: faker.hacker.verb(),
      },
      winners: {
        title: faker.commerce.productName(),
        name: faker.name.findName(),
        points: faker.commerce.department(),
        prize: faker.commerce.department(),
      },
      rewards: {
        title: faker.commerce.department(),
        points: faker.commerce.productName(),
        description: faker.lorem.paragraphs(),
        qualify: ({ nextDraw }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} in ${nextDraw}!`,
        noQualify: ({ nextDraw, remaining }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} ${remaining} points for ${nextDraw}`,
      },
    },
    rewards,
    winners,
  };
};


const basic = () => <Profile {...createProps()} />;


storiesOf('view.Profile', module)
  .add('Basic', basic);
