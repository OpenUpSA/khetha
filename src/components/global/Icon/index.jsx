import React from 'react';
import iconsObject from './iconsObject';

const Icon = ({ type }) => {
  const Result = iconsObject[type];
  return <Result />;
};

export default Icon;
