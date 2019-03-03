import React from 'react';
import t from 'prop-types';


import StateController from './StateController';
import String from './String';
import Text from './Text';
import Boolean from './Boolean';
import Buttons from './Buttons';
import Select from './Select';
import Checkboxes from './Checkboxes';
import Gps from './Gps';


const calcComponent = (format) => {
  switch (format) {
    case 'string': return String;
    case 'text': return Text;
    case 'boolean': return Boolean;
    case 'buttons': return Buttons;
    case 'select': return Select;
    case 'checkboxes': return Checkboxes;
    case 'gps': return Gps;
    default: return null;
  }
};


const Input = (props) => {
  const {
    format,
    answer,
    options,
    focusElement,
    next,
  } = props;

  const passedProps = {
    answer,
    next,
    options,
    focusElement,
  };

  return (
    <StateController
      {...passedProps}
      presentation={calcComponent(format)}
    />
  );
};


export default Input;


Input.propTypes = {
  format: t.string.isRequired,
  answer: t.string,
  options: t.arrayOf(t.string),
  focusElement: t.node.isRequired,
  next: t.func.isRequired,
  id: t.number.isRequired,
};

Input.defaultProps = {
  answer: null,
  options: null,
};
