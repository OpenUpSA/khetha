/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import { createElement } from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import { createUser } from './src/redux/actions';
import store from './src/redux/store';

const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);

const onClientEntry = () => {
  Sentry.init({ dsn: 'https://4beb31b94ed742d9aeeb981a354fc690@sentry.io/1416880' });

  const { info } = store.getState();
  const { onboarded, id } = info;

  const isDebateHomeUrl = /^\/bigdebate\/?$/i.test(window.location.pathname);
  const isDebatePollUrl = /^\/bigdebatepoll\/?$/i.test(window.location.pathname);
  const isDebateVoteUrl = /^\/bigdebatevote\/?$/i.test(window.location.pathname);
  const isDebateJoinUrl = /^\/bigdebatejoin\/?$/i.test(window.location.pathname);
  const isLoadingUrl = /^\/\/?$/i.test(window.location.pathname);
  const isIntroUrl = /^\/intro\/?$/i.test(window.location.pathname);
  const isOnboarding = isLoadingUrl || isIntroUrl;

  if (!id) {
    store.dispatch(createUser());
  }

  if (isDebateHomeUrl || isDebateVoteUrl) {
    window.location.href = '/bigdebatepoll';
    return null;
  }

  if (isDebatePollUrl || isDebateJoinUrl) {
    return null;
  }

  if (!onboarded && !isOnboarding) {
    window.location.href = '/';
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
