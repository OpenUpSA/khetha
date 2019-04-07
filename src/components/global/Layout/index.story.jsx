/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import { randomLengthBlankArray, randomNumber } from '../../../helpers/functions/randomizer';
import Layout from './index';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('⚙️ components|global/Layout', module)
  .add('README', () => <div />, readmeConfig);

const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
  };
};


const basic = () => (
  <Layout {...createProps()}>
    {randomLengthBlankArray(1, 10).map(() => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraphs()}</p>
    ))}
  </Layout>
);


const isolated = () => (
  <Layout {...createProps()} isolated>
    {randomLengthBlankArray(1, 10).map(() => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraphs()}</p>
    ))}
  </Layout>
);


storiesOf('⚙️ components|global/Layout/tests', module)
  .add('Basic', basic)
  .add('Isolated (no header or footer)', isolated);
