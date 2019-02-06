/* eslint-disable import/prefer-default-export */
// import { createElement } from 'react';
// import { Provider } from 'react-redux';
// import { navigate } from 'gatsby';
// import { version as targetStorageVersion } from './src/config/storage.json';
// import { setVersion as setStorageVersion } from './src/redux/modules/storage';
// import { mergeStateFromRemote, overrideRemoteState } from './src/redux/actions';
// import store from './src/redux/store';


// const wrapRootElement = ({ element }) => (
//   createElement(Provider, { store }, element)
// );


// const wipeStorage = ({ version }) => {
//   window.localStorage.clear();
//   store.dispatch(setStorageVersion({ version }));
// };


// const onInitialClientRender = () => {
//   const { storage } = store.getState();
//   const { version: storageVersion } = storage;

//   if (storageVersion < targetStorageVersion) {
//     wipeStorage({ version: targetStorageVersion });
//   }
// };


// export {
//   wrapRootElement,
//   onInitialClientRender,
// };


// export default {
//   wrapRootElement,
//   onInitialClientRender,
// };
