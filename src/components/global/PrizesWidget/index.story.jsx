/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { sentence } from 'change-case';

import { randomNumber, randomLengthBlankArray } from '../../../helpers/functions/randomizer';
import PrizeWidget from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('⚙️ components|global/PrizeWidget', module)
  .add('README', () => <div />, readmeConfig);

const basicProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
    translation: {
      qualify: ({ nextDraw }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} in ${nextDraw}!`,
      noQualify: ({ nextDraw, remaining }) => `${sentence(faker.hacker.adjective())} ${faker.hacker.ingverb()} ${remaining} points for ${nextDraw}`,
    },
    rewards: randomLengthBlankArray(10, 20).map(() => ({
      id: faker.random.uuid(),
      points: randomNumber(0, 100),
      title: faker.commerce.productName(),
      description: faker.hacker.phrase(),
      dates: randomLengthBlankArray(0, 10).map(() => faker.date.between('2018-01-01', '2020-01-01')),
    })),
  };
};


const basic = () => <PrizeWidget {...basicProps()} />;
const single = () => <PrizeWidget {...basicProps()} filters={{ index: 0 }} />;
const completed = () => <PrizeWidget {...basicProps()} filters={{ progress: 'completed' }} />;
const uncompleted = () => <PrizeWidget {...basicProps()} filters={{ progress: 'pending' }} />;
const upcoming = () => <PrizeWidget {...basicProps()} filters={{ date: 'upcoming' }} />;
const past = () => <PrizeWidget {...basicProps()} filters={{ date: 'past' }} />;


storiesOf('⚙️ components|global/PrizeWidget/examples', module)
  .add('Basic', basic)
  .add('Only show first', single)
  .add('Only show completed', completed)
  .add('Only show uncompleted', uncompleted)
  .add('Only show upcoming', upcoming)
  .add('Only show past', past);
