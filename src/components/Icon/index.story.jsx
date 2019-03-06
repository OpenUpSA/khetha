/* eslint-disable import/no-extraneous-dependencies */


import React from 'react';
import { storiesOf } from '@storybook/react';


import { randomNumber } from '../../helpers/randomizer';
import { names } from '../../config/icons';
import Icon from './index';


const randomIcon = () => randomNumber(0, names.length > 0 ? names.length - 1 : 0);


const small = () => <Icon type={names[randomIcon()]} size="small" />;
const standard = () => <Icon type={names[randomIcon()]} size="standard" />;
const large = () => <Icon type={names[randomIcon()]} size="large" />;
const huge = () => <Icon type={names[randomIcon()]} size="huge" />;
const massive = () => <Icon type={names[randomIcon()]} size="massive" />;


storiesOf('component.Icon', module)
  .add('Small', small)
  .add('Standard', standard)
  .add('Large', large)
  .add('Huge', huge)
  .add('Massive', massive);
