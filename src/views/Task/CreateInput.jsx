import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GradientButton from '../../components/GradientButton';
import GradientSelect from '../../components/GradientSelect';




const CreateInput = (props) => {
  const {
    type,
    value,
    options,
    focus,
    next,
    index,
  } = props;

  if (type === 'checkboxes') {
    return (
     
    );
  }


  if (type === 'string') {
    
  }

  if (type === 'text') {
   
  }

  if (type === 'select') {

  }

  if (type === 'boolean') {
   
  }

  if (type === 'gps') {

  }

  return null;
};


export default CreateInput;


CreateInput.propTypes = {
  type: t.string.isRequired,
  value: t.string,
  options: t.arrayOf(t.string),
  focus: t.shape({
    current: t.node,
  }).isRequired,
  next: t.func.isRequired,
  index: t.number.isRequired,
};

CreateInput.defaultProps = {
  value: null,
  options: null,
};
