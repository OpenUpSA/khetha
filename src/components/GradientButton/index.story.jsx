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


const basic = () => <GradientButton {...createProps()} filled onButtonPress={() => console.log('clicked')} />;
const primary = () => <GradientButton {...createProps()} primary onButtonPress={() => console.log('clicked')} />;
const active = () => <GradientButton {...createProps()} active onButtonPress={() => console.log('clicked')} />;
const fullWidth = () => <GradientButton {...createProps()} fullWidth onButtonPress={() => console.log('clicked')} />;
const withIcon = () => <GradientButton {...createProps()} fullWidth icon="Grade" onButtonPress={() => console.log('clicked')} />;


const withResolvers = () => (
  <div>
    <GradientButton
      text="Unresolved Forced"
      resolve={false}
      onButtonPress={() => console.log('clicked')}
    />
    <GradientButton text="Resolved Forced" resolve onButtonPress={() => console.log('clicked')} />
    <GradientButton text="Resolve Short" resolve="short" onButtonPress={() => console.log('clicked')} />
    <GradientButton text="Resolve Medium" resolve="medium" onButtonPress={() => console.log('clicked')} />
    <GradientButton text="Resolve Long" resolve="long" onButtonPress={() => console.log('clicked')} />
    <GradientButton text="Resolve Infinite" resolve="infinite" onButtonPress={() => console.log('clicked')} />
  </div>
);


storiesOf('component.GradientButton', module)
  .add('Basic', basic)
  .add('Primary', primary)
  .add('Active', active)
  .add('Full Width', fullWidth)
  .add('With Icon', withIcon)
  .add('Different resolve times', withResolvers);
