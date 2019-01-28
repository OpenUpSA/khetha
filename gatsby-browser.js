/* eslint-disable import/prefer-default-export */

import { createElement } from 'react';
import { Provider } from 'react-redux';
import { navigate } from 'gatsby';

import { version as targetStorageVersion } from './src/config/storage.json';
import { setVersion as setStorageVersion } from './src/redux/modules/storage';
import { initStateFromRemote, syncWithRemote } from './src/redux/actions';
import store from './src/redux/store';


export const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


const wipeStorage = ({ version }) => {
  window.localStorage.clear();
  store.dispatch(setStorageVersion({ version }));
};


export const onInitialClientRender = () => {
  const { user } = store.getState();
  const { language } = user;

  if (!language) {
    return navigate('/en/');
  }

  return navigate(`/${language}/start`);
};


export const onClientEntry = () => {
  const { storage } = store.getState();
  const { version: storageVersion } = storage;

  if (storageVersion < targetStorageVersion) {
    wipeStorage({ version: targetStorageVersion });
  }

  store.dispatch(initStateFromRemote())
    .then(() => store.dispatch(syncWithRemote()));
};
