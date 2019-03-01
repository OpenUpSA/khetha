/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import GradientButton from './index';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    text: faker.hacker.verb(),
  };
};


const basic = () => <GradientButton {...createProps()} filled />;
const primary = () => <GradientButton {...createProps()} primary />;
const fullWidth = () => <GradientButton {...createProps()} fullWidth />;
const withIcon = () => <GradientButton {...createProps()} fullWidth icon="Grade" />;


const withResolvers = () => (
  <div>
    <GradientButton text="Unresolved Forced" resolve={false} />
    <GradientButton text="Resolved Forced" resolve />
    <GradientButton text="Resolve Short" resolve="short" />
    <GradientButton text="Resolve Medium" resolve="medium" />
    <GradientButton text="Resolve Long" resolve="long" />
    <GradientButton text="Resolve Infinite" resolve="infinite" />
  </div>
);


storiesOf('component.GradientButton', module)
  .add('Basic', basic)
  .add('Primary', primary)
  .add('Full Width', fullWidth)
  .add('With Icon', withIcon)
  .add('Different resolve times', withResolvers);
