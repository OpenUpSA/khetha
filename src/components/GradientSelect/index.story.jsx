/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import GradientSelect from './index';
import { randomLengthBlankArray } from '../../helpers/randomizer';


// <Playground>
//   <GradientSelect
//     options={[
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### With Reset

// <Playground>
//   <GradientSelect
//     options={[
//       { text: 'None', reset: true },
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### With Disabled

// <Playground>
//   <GradientSelect
//     options={[
//       { text: 'Option 1', disabled: true },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### With Existing Selection

// <Playground>
//   <GradientSelect
//     value="Option 2"
//     options={[
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### With Callback

// <Playground>
//   <GradientSelect
//     options={[
//       {
//         text: 'Option 1',
//         callback: console.warn,
//       },
//       {
//         text: 'Option 2',
//         callback: () => console.log('Hello!'),
//       }
//     ]}
//   />
// </Playground>

// #### As Full

// <Playground>
//   <GradientSelect
//     full
//     options={[
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### Filled

// <Playground>
//   <GradientSelect
//     filled
//     options={[
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>

// #### Prefix

// <Playground>
//   <GradientSelect
//     filled
//     
//     options={[
//       { text: 'Option 1' },
//       { text: 'Option 2' },
//     ]}
//   />
// </Playground>



const createProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    options: randomLengthBlankArray(1, 6).map((value, index) => ({
      text: `${faker.commerce.department()} ${index}`,
    })),
  };
};


const propsWithReset = {
  options: [
    {
      text: 'Reset',
      reset: true,
    },
    ...createProps().options,
  ],
};

const propsWithSelected = {
  options: [
    {
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
  const result = <GradientSelect {...createProps()} changeCallback={console.log} />;
  return result;
};


const primary = () => {
  const result = <GradientSelect {...createProps()} primary changeCallback={console.log} />;
  return result;
};


const fullWidth = () => {
  const result = <GradientSelect {...createProps()} fullWidth changeCallback={console.log} />;
  return result;
};


const disabled = () => {
  const result = <GradientSelect {...propsWithDisabled} changeCallback={console.log} />;
  return result;
};


const reset = () => {
  const result = <GradientSelect {...propsWithReset} changeCallback={console.log} />;
  return result;
};

const selected = () => {
  const result = (
    <GradientSelect
      {...propsWithSelected}
      selected="Hello World!"
      changeCallback={console.log}
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
