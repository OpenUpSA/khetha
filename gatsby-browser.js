/* eslint-disable import/prefer-default-export */

import { createElement } from 'react';
import { Provider } from 'react-redux';
import { version as targetStorageVersion } from './src/config/storage.json';
import store from './src/redux/store';
import { setVersion as setStorageVersion } from './src/redux/modules/storage';
import { createUserId } from './src/redux/modules/user';


export const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


const wipeStorage = ({ version }) => {
  window.localStorage.clear();
  store.dispatch(setStorageVersion({ version }));
};


export const onClientEntry = () => {
  const { storage, user } = store.getState();

  const { version: storageVersion } = storage;
  const { id } = user;

  if (storageVersion < targetStorageVersion) {
    wipeStorage({ version: targetStorageVersion });
  }

  if (!id) {
    store.dispatch(createUserId());
  }
};
