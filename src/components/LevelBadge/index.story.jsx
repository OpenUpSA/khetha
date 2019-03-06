/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomNumber } from '../../helpers/randomizer';
import LevelBadge from './index';


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


storiesOf('component.LevelBadge', module)
  .add('Basic', basic)
  .add('Small', small);
