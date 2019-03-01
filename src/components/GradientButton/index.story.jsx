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


const basic = () => <GradientButton {...createProps()} filled onButtonClick={() => console.log('click')} />;
const primary = () => <GradientButton {...createProps()} primary onButtonClick={() => console.log('click')} />;
const fullWidth = () => <GradientButton {...createProps()} fullWidth onButtonClick={() => console.log('click')} />;
const withIcon = () => <GradientButton {...createProps()} fullWidth icon="Grade" onButtonClick={() => console.log('click')} />;


const withResolvers = () => (
  <div>
    <GradientButton text="Unresolved Forced" resolve={false} onButtonClick={() => console.log('click')} />
    <GradientButton text="Resolved Forced" resolve  onButtonClick={() => console.log('click')}/>
    <GradientButton text="Resolve Short" resolve="short" onButtonClick={() => console.log('click')} />
    <GradientButton text="Resolve Medium" resolve="medium" onButtonClick={() => console.log('click')} />
    <GradientButton text="Resolve Long" resolve="long" onButtonClick={() => console.log('click')} />
    <GradientButton text="Resolve Infinite" resolve="infinite" onButtonClick={() => console.log('click')}/>
  </div>
);


storiesOf('component.GradientButton', module)
  .add('Basic', basic)
  .add('Primary', primary)
  .add('Full Width', fullWidth)
  .add('With Icon', withIcon)
  .add('Different resolve times', withResolvers);
