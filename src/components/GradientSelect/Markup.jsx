import React, { Fragment } from 'react';
import t from 'prop-types';


import { ForceNormalWeight, StyledSelect } from './styled';
import Item from './Item';


const addPrefix = (prefix, value) => (
  <Fragment>
    {prefix && <ForceNormalWeight>{`${prefix}: `}</ForceNormalWeight>}
    <span>{value}</span>
  </Fragment>
);


const Markup = (props) => {
  const {
    placeholder = 'Select an option',
    options = [],
    filled,
    changeSelected,
    full: fullWidth,
    selected,
    prefix,
  } = props;


  const changeSelectedWrapper = event => changeSelected(event.target.value);


  const toggleRender = list => (value) => {
    const result = (value !== '' ? addPrefix(prefix, list[value].text) : placeholder);
    return result;
  };


  return (
    <StyledSelect
      variant={filled ? 'filled' : 'outlined'}
      displayEmpty
      {...{ fullWidth }}
      value={selected || ''}
      onChange={changeSelectedWrapper}
      classes={{ icon: 'icon', selectMenu: 'selectMenu' }}
      renderValue={toggleRender(options)}
    >
      {options.map(Item)}
    </StyledSelect>
  );
};


export default Markup;


Markup.propTypes = {
  options: t.arrayOf(
    t.shape({
      disabled: t.bool,
      text: t.string,
      callback: t.func,
      reset: t.bool,
    }),
  ).isRequired,
  changeSelected: t.func.isRequired,
  placeholder: t.string,
  filled: t.bool,
  full: t.bool,
  prefix: t.string,
  selected: t.string,
};


Markup.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
  full: false,
  prefix: null,
  selected: null,
};
