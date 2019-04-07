/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import gatsby from './gatsby.md';
import redux from './redux.md';
import materialUi from './material-ui.md';
import styledComponents from './styled-components.md';

const gatsbyConfig = {
  readme: {
    content: gatsby,
  },
};

const reduxConfig = {
  readme: {
    content: redux,
  },
};

const materialUiConfig = {
  readme: {
    content: materialUi,
  },
};

const styledComponentsConfig = {
  readme: {
    content: styledComponents,
  },
};

storiesOf('📚 documentation|technology', module)
  .add('Gatsby', () => <div />, gatsbyConfig)
  .add('Redux', () => <div />, reduxConfig)
  .add('Material UI', () => <div />, materialUiConfig)
  .add('Styled Components', () => <div />, styledComponentsConfig);
