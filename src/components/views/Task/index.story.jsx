/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Task from './index';
import {
  randomLengthBlankArray,
  randomFromArray,
  randomBool,
  randomNumber,
} from '../../../helpers/functions/randomizer';
import content from './README.md';

const readmeConfig = {
  readme: {
    content,
  },
};

storiesOf('⚙️ components|views/Task', module)
  .add('README', () => <div />, readmeConfig);

const types = [
  'string',
  'text',
  'boolean',
  'buttons',
  'select',
  'checkboxes',
  'date',
  'gps',
];


const createOptions = (type) => {
  if (type !== 'select' && type !== 'checkboxes' && type !== 'buttons') {
    return [];
  }

  return randomLengthBlankArray(2, 10).map(() => faker.commerce.productName());
};


const singleItem = format => ({
  title: faker.commerce.productName(),
  questions: [{
    title: faker.hacker.phrase(),
    description: faker.hacker.phrase(),
    format,
    options: [
      ...createOptions(format),
      ...(format === 'select' ? ['Other'] : []),
    ],
  }],
});


const createProps = (min = 1, max = 3, seed) => {
  if (seed) {
    faker.seed(seed);
  }

  return {
    title: faker.commerce.productName(),
    questions: randomLengthBlankArray(min, max).map(() => {
      const type = randomFromArray(types);

      return {
        title: faker.hacker.phrase(),
        description: faker.hacker.phrase(),
        format: type,
        options: createOptions(type),
      };
    }),
  };
};


const completeQuestion = (complete, type, options) => {
  if (!complete) {
    return null;
  }

  switch (type) {
    case 'string': return faker.hacker.phrase();
    case 'text': return faker.lorem.paragraphs();
    case 'boolean': return randomFromArray(['Yes', 'No', "Don't know"]);
    case 'buttons': return randomFromArray(options);
    case 'select': return randomFromArray(options);
    case 'checkboxes': return randomFromArray(options);
    case 'gps': return '18.4691608 -33.9783781';
    default: return null;
  }
};


const partialProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  const questions = randomLengthBlankArray(1, 30).map(() => {
    const type = randomFromArray(types);

    return {
      title: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      format: type,
      options: createOptions(type),
    };
  });

  return {
    title: faker.commerce.productName(),
    questions,
    answers: questions.map(({ format, options }) => completeQuestion(
      randomBool(),
      format,
      options,
    )),
  };
};


const completedProps = (seed) => {
  if (seed) {
    faker.seed(seed);
  }

  const questions = randomLengthBlankArray(1, 30).map(() => {
    const type = randomFromArray(types);

    return {
      title: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      format: type,
      options: createOptions(type),
    };
  });

  return {
    title: faker.commerce.productName(),
    questions,
    answers: questions.map(({ format, options }) => completeQuestion(true, format, options)),
  };
};


const string = () => <Task {...singleItem('string')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const date = () => <Task {...singleItem('date')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const text = () => <Task {...singleItem('text')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const boolean = () => <Task {...singleItem('boolean')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const buttons = () => <Task {...singleItem('buttons')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const select = () => <Task {...singleItem('select')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;
const checkbox = () => <Task {...singleItem('checkboxes')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;


const gps = () => <Task {...singleItem('gps')} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const small = () => <Task {...createProps(1, 3)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const average = () => <Task {...createProps(6, 12)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const massive = () => <Task {...createProps(30, 35)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const partial = () => <Task {...partialProps()} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const isolated = () => <Task {...createProps(6, 12)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} isolated />;

const logo = () => <Task {...createProps(6, 12)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} logo />;

const autoSubmit = () => <Task {...createProps(6, 12)} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} autoSubmit />;

const completed = () => <Task {...completedProps()} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} />;

const submitted = () => <Task {...completedProps()} onTaskSubmit={console.log} onQuestionSave={console.log} points={randomNumber(0, 110)} submitted />;


storiesOf('⚙️ components|views/Task/tests', module)
  .add('String item', string)
  .add('Text item', text)
  .add('Boolean item', boolean)
  .add('Buttons item', buttons)
  .add('Select item', select)
  .add('Checkboxes item', checkbox)
  .add('Date item', date)
  .add('GPS item', gps)
  .add('Small task', small)
  .add('Average task', average)
  .add('Massive task', massive)
  .add('Isolated task', isolated)
  .add('Auto-submit', autoSubmit)
  .add('With Logo', logo)
  .add('Partially completed task', partial)
  .add('Completed task', completed)
  .add('Submitted', submitted);
