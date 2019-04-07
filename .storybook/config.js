import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';

import { configure, addDecorator } from "@storybook/react";
import { addReadme } from 'storybook-readme';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import { configureReadme } from 'storybook-readme';


const req = require.context("../src", true, /.story.jsx$/);
function loadStories() {
  req.keys().forEach(req);
}

const Wrapper = ({ children }) => <Fragment><CssBaseline />{children}</Fragment>

const Documentation = styled.div`
  max-width: 1000px;
  padding: 50px;
  margin: 0 auto;
`;

configureReadme({
  StoryPreview: Fragment,
  DocPreview: Documentation,
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(addReadme);

configure(loadStories, module);
