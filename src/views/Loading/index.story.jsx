/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';


import Loading from './index';


const basic = () => <Loading />;


storiesOf('view.Loading', module)
  .add('Basic', basic);
