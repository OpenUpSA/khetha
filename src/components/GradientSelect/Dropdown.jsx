import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const gradientBg = 'linear-gradient(162.21deg, #00F260 0%, #0575E6 83.33%), red';
const boxShadow = '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);';
const outline = '1px solid #0B5FFF';


const StyledSelect = styled(Select)`
&& {
  background: ${({ variant }) => (variant === 'filled' ? gradientBg : 'none')};
  border: ${({ variant }) => (variant === 'filled' ? 'none' : outline)};
  width: ${({ full }) => (full ? '100%' : 'auto')};
  height: 42px;
  border-radius: 4px;
  color: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  box-shadow: ${({ variant }) => (variant === 'filled' ? boxShadow : 'none')}

  & .icon {
    fill: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
    margin-right: 10px;
  }

  & .selectMenu {
    padding: 13px 50px 11px 23px;
  }

  &&:before {
    border-width: 0
  }

  &:hover {
    &&:before {
      border-width: 0
    }
  }
  
}
`;


const buildOptions = options => options.map(
  ({ text, callback }) => (
    <MenuItem
      value={text}
      key={text}
      onClick={callback}
    >
      {text}
    </MenuItem>
  ),
);


const Dropdown = (props) => {
  const {
    placeholder = 'Select an option',
    options = [],
    filled,
    changeSelected,
    full,
  } = props;

  const changeSelectedWrapper = event => changeSelected(event.target.value);

  return (
    <StyledSelect
      {...{ full }}
      variant={filled ? 'filled' : 'outlined'}
      displayEmpty
      value=""
      onChange={changeSelectedWrapper}
      classes={{ icon: 'icon', selectMenu: 'selectMenu' }}
      renderValue={() => placeholder}
      inputProps={{
        name: 'age',
        id: 'age-simple',
      }}
    >
      {buildOptions(options)}
    </StyledSelect>
  );
};


export default Dropdown;


Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      callback: PropTypes.func,
    }),
  ).isRequired,
  changeSelected: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  filled: PropTypes.bool,
  full: PropTypes.bool,
};


Dropdown.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
  full: false,
};
