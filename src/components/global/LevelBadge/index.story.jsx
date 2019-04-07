/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import { randomNumber } from '../../../helpers/functions/randomizer';
import LevelBadge from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('⚙️ components|global/LevelBadge', module)
  .add('README', () => <div />, readmeConfig);

const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
  };
};


const basic = () => <LevelBadge {...createProps()} />;
const small = () => <LevelBadge {...createProps()} size="small" />;


storiesOf('⚙️ components|global/LevelBadge/tests', module)
  .add('Basic', basic)
  .add('Small', small);
