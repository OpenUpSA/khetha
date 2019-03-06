/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';


import { randomNumber, randomLengthBlankArray } from '../../helpers/randomizer';
import ProgressList from './index';


const basicProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 30).map((value, index) => ({
      id: index,
      progress: !!randomNumber(0, 1),
      title: `${faker.commerce.productName()} ${index}`,
      content: faker.hacker.phrase(),
    })),
  };
};


const buttonProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    buttons: true,
    items: randomLengthBlankArray(1, 30).map((value, index) => ({
      id: index,
      progress: !!randomNumber(0, 1),
      title: `${faker.commerce.productName()} ${index}`,
      content: faker.lorem.paragraphs(),
    })),
  };
};


const linearPendingProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 10).map((value, index) => ({
      id: index,
      progress: false,
      title: `${faker.commerce.productName()} ${index}`,
      content: saveAnswer => (
        <div>
          <input />
          <button type="button" onClick={() => saveAnswer('clicked')}>Next Item</button>
        </div>
      ),
    })),
  };
};


const linearMixedProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 10).map((value, index) => ({
      id: index,
      progress: !!randomNumber(0, 1),
      title: `${faker.commerce.productName()} ${index}`,
      content: saveAnswer => (
        <div>
          <input />
          <button type="button" onClick={() => saveAnswer('clicked')}>Next Item</button>
        </div>
      ),
    })),
  };
};


const linearCompletedProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 10).map((value, index) => ({
      id: index,
      progress: true,
      title: `${faker.commerce.productName()} ${index}`,
      content: saveAnswer => (
        <div>
          <input />
          <button type="button" onClick={() => saveAnswer('clicked')}>Next Item</button>
        </div>
      ),
    })),
  };
};


const summaryProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 30).map((value, index) => ({
      id: index,
      progress: !!randomNumber(0, 1),
      title: `${faker.commerce.productName()} ${index}`,
      content: faker.hacker.phrase(),
      summary: faker.hacker.phrase(),
      highlighted: !!randomNumber(0, 1),
      error: !!randomNumber(0, 1),
    })),
  };
};


const incrementalProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    items: randomLengthBlankArray(1, 30).map((value, index) => ({
      progress: randomNumber(0, 100),
      title: `${faker.commerce.productName()} ${index}`,
      content: faker.hacker.phrase(),
    })),
  };
};


const basic = () => (
  <ProgressList {...basicProps()} onSaveAnswer={console.log} />
);

const buttons = () => (
  <ProgressList {...buttonProps()} onSaveAnswer={console.log} />
);

const incremental = () => (
  <ProgressList {...incrementalProps()} incremental onSaveAnswer={console.log} />
);

const summary = () => (
  <ProgressList {...summaryProps()} onSaveAnswer={console.log} />
);

const linearPending = () => (
  <ProgressList {...linearPendingProps()} advance onSaveAnswer={console.log} />
);

const linearMixed = () => (
  <ProgressList {...linearMixedProps()} advance onSaveAnswer={console.log} />
);

const linearCompleted = () => (
  <ProgressList {...linearCompletedProps()} advance onSaveAnswer={console.log} />
);


storiesOf('component.ProgressList', module)
  .add('Basic', basic)
  .add('Entire panel as button', buttons)

  .add('Linear Progress Pending', linearPending)
  .add('Linear Progress Mixed', linearMixed)
  .add('Linear Progress Completed', linearCompleted)

  .add('Summaries, highlighting and errors', summary)
  .add('Incremental Progress', incremental);
