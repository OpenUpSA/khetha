import React from 'react';
import renderer from 'react-test-renderer';

import A from './A';

test('A', () => {
  const tree = renderer
    .create(<A />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
