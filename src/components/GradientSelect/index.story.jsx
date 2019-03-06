/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import GradientSelect from './index';
import { randomLengthBlankArray } from '../../helpers/randomizer';


const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    options: randomLengthBlankArray(1, 6).map((value, index) => ({
      id: index,
      text: `${faker.commerce.department()} ${index}`,
    })),
  };
};


const propsWithReset = {
  options: [
    {
      id: 'reset',
      text: 'Reset',
      reset: true,
    },
    ...createProps().options,
  ],
};

const propsWithSelected = {
  options: [
    {
      id: 'disabled',
      text: 'Hello World!',
    },
    ...createProps().options,
  ],
};

const propsWithDisabled = {
  options: [
    {
      text: faker.commerce.department(),
      disabled: true,
    },
    ...createProps().options,
  ],
};


const basic = () => {
  const result = <GradientSelect {...createProps()} onSelectionChange={console.log} />;
  return result;
};


const primary = () => {
  const result = <GradientSelect {...createProps()} primary onSelectionChange={console.log} />;
  return result;
};


const fullWidth = () => {
  const result = <GradientSelect {...createProps()} fullWidth onSelectionChange={console.log} />;
  return result;
};


const disabled = () => {
  const result = <GradientSelect {...propsWithDisabled} onSelectionChange={console.log} />;
  return result;
};


const reset = () => {
  const result = <GradientSelect {...propsWithReset} onSelectionChange={console.log} />;
  return result;
};

const selected = () => {
  const result = (
    <GradientSelect
      {...propsWithSelected}
      selected="Hello World!"
      onSelectionChange={console.log}
    />
  );

  return result;
};


const prefix = () => {
  const result = (
    <GradientSelect
      {...propsWithSelected}
      selected="Hello World!"
      changeCallback={console.log}
      prefix={faker.commerce.department()}
    />
  );

  return result;
};


storiesOf('component.GradientSelect', module)
  .add('Basic', basic)
  .add('Primary', primary)
  .add('Full Width', fullWidth)
  .add('Existing Selection', selected)
  .add('With Prefix', prefix)
  .add('Disabled', disabled)
  .add('Reset', reset);
