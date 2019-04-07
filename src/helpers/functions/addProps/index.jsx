import { createElement } from 'react';


const addProps = (Component, outerProps, keyString) => (innerProps, index) => {
  const { children } = outerProps;
  const key = innerProps[keyString] || null;

  const newProps = {
    ...outerProps,
    ...innerProps,
    key,
    index,
  };

  return createElement(Component, newProps, children);
};


export default addProps;
