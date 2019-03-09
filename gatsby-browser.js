/* eslint-disable import/prefer-default-export */


import { createElement } from 'react';
import { Provider } from 'react-redux';


import { createUser } from './src/redux/actions';
import store from './src/redux/store';


const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


const onClientEntry = () => {
  const { info } = store.getState();
  const { onboarded, id } = info;

  const isDebateHomeUrl = /^\/bigdebate\/?$/i.test(window.location.pathname);
  const isDebatePollUrl = /^\/bigdebatepoll\/?$/i.test(window.location.pathname);
  const isLoadingUrl = /^\/\/?$/i.test(window.location.pathname);
  const isIntroUrl = /^\/intro\/?$/i.test(window.location.pathname);
  const isOnboarding = isLoadingUrl || isIntroUrl;

  if (!id) {
    store.dispatch(createUser());
  }

  if (isDebateHomeUrl)
      window.location = '/bigdebatepoll';

  if (isDebatePollUrl) {
    return null;
  }

  if (!onboarded && !isOnboarding) {
    window.location = '/';
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
