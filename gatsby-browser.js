/* eslint-disable import/prefer-default-export */

import { createElement } from 'react';
import { Provider } from 'react-redux';
// import { navigate } from 'gatsby';
// import { version as targetStorageVersion } from './src/config/storage.json';
// import { setVersion as setStorageVersion } from './src/redux/modules/storage';
import store from './src/redux/store';
import {
  initStateFromRemote,
  syncWithRemote,
  checkOfflineQueue,
} from './src/redux/actions';


export const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


export const onClientEntry = () => {
  // const { user, storage } = store.getState();

  // const { version: storageVersion } = storage;
  // const { value: language } = user.language;
  // const { value: onboarding } = user.onboarding;

  // if (storageVersion < targetStorageVersion) {
  //   wipeStorage({ version: targetStorageVersion });
  // }

  // if (!language) {
  //   return navigate('/en/');
  // }

  // if (onboarding <= 2) {
  //   return navigate(`/${language}/`);
  // }

  // return navigate(`/${language}/start/`);

  const intervalSync = () => store
    .dispatch(checkOfflineQueue())
    .then(() => store.dispatch(initStateFromRemote()))
    .then(() => store.dispatch(syncWithRemote()));

  intervalSync();
  setInterval(intervalSync, 60000);
};
