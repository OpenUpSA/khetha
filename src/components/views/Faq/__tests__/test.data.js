/* eslint-disable import/no-extraneous-dependencies */

import faker, { commerce, lorem } from 'faker';
import { blankArray } from '../../../../helpers/functions/randomizer';

faker.seed(123);

const data = {
  a: {
    number: 10,
    faqs: blankArray(3).map(() => ({
      title: commerce.productName(),
      body: lorem.paragraphs(),
    })),
  },
  b: {
    number: 110,
    faqs: blankArray(1).map(() => ({
      title: commerce.productName(),
      body: lorem.paragraphs(),
    })),
  },
  c: {
    number: 0,
    faqs: blankArray(9).map(() => ({
      title: commerce.productName(),
      body: lorem.paragraphs(),
    })),
  },
  none: {
    number: 60,
    faqs: [],
  },
};

const {
  a,
  b,
  c,
  none,
} = data;

export {
  a, b, c, none,
};
export default data;
