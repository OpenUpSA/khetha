import { key } from './data.json';


const isBrowser = typeof window !== 'undefined';


const addAsBottomItem = (callback, params) => {
  const localStorageString = window.localStorage.getItem(key);
  const currentLocalStorage = localStorageString ? JSON.parse(localStorageString) : [];

  const newStorage = [
    ...currentLocalStorage,
    {
      callback,
      params,
    },
  ];

  window.localStorage.setItem(key, JSON.stringify(newStorage));
};


const removeTopItem = () => {
  const localStorageString = window.localStorage.getItem(key);
  const currentLocalStorage = localStorageString ? JSON.parse(localStorageString) : [];

  const newStorage = currentLocalStorage.slice(1);

  window.localStorage.setItem(key, JSON.stringify(newStorage));
};


export const addToQueue = (callback, params) => {
  if (!isBrowser) {
    return null;
  }

  if (window.navigator.offLine) {
    addAsBottomItem(callback, params);
  }

  return callback(params);
};


export const checkQueue = (callback) => {
  if (!isBrowser) {
    return null;
  }

  if (window.navigator.offLine) {
    return false;
  }

  const localStorageString = window.localStorage.getItem(key);
  const currentLocalStorage = localStorageString ? JSON.parse(localStorageString) : [];

  if (currentLocalStorage.length < 1) {
    return false;
  }

  currentLocalStorage[0].callback(...currentLocalStorage[0].params);
  removeTopItem();

  callback({
    callback: currentLocalStorage[0].callback,
    params: currentLocalStorage[0].params,
  });

  return checkQueue();
};


export default {
  addToQueue,
  checkQueue,
};
