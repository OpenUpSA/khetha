/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomLengthBlankArray, randomNumber } from '../../helpers/randomizer';
import Layout from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    points: randomNumber(0, 110),
  };
};


const basic = () => (
  <Layout {...createProps()} onMenuClick={console.log}>
    {randomLengthBlankArray(1, 10).map(() => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraphs()}</p>
    ))}
  </Layout>
);


const noHeader = () => (
  <Layout {...createProps()} header={false} onMenuClick={console.log}>
    {randomLengthBlankArray(1, 10).map(() => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraphs()}</p>
    ))}
  </Layout>
);


const noFooter = () => (
  <Layout {...createProps()} footer={false} onMenuClick={console.log}>
    {randomLengthBlankArray(1, 10).map(() => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraphs()}</p>
    ))}
  </Layout>
);

storiesOf('component.Layout', module)
  .add('Basic', basic)
  .add('No Header', noHeader)
  .add('No Footer', noFooter);
