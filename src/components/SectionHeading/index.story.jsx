/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import SectionHeading from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    text: faker.commerce.productName(),
  };
};


const basic = () => <SectionHeading {...createProps()} />;


storiesOf('component.SectionHeading', module)
  .add('Basic', basic);
