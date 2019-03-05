/* eslint-disable import/prefer-default-export */


import { createElement } from 'react';
import { Provider } from 'react-redux';
import { navigate } from 'gatsby';


import { createUser } from './src/redux/actions';
import store from './src/redux/store';


const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


const onInitialClientRender = () => {
  const { info } = store.getState();
  const { id } = info;

  if (!id) {
    navigate('/intro/');
    return store.dispatch(createUser());
  }

  return null;
};


export {
  wrapRootElement,
  onInitialClientRender,
};


export default {
  wrapRootElement,
  onInitialClientRender,
};
