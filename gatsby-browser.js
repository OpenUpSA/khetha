/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import { createElement } from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import createUser from './src/redux/actions/createUser';
import store from './src/redux/store';

const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);

const onClientEntry = () => {
  Sentry.init({ dsn: 'https://4beb31b94ed742d9aeeb981a354fc690@sentry.io/1416880' });

  const { info } = store.getState();
  const { id } = info;

  if (!id) {
    store.dispatch(createUser());
  }

  return null;
};


export {
  wrapRootElement,
  onClientEntry,
};


export default {
  wrapRootElement,
  onClientEntry,
};
