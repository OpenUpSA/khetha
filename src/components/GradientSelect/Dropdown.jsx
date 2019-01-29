import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const gradientBg = 'linear-gradient(162.21deg, #00F260 0%, #0575E6 83.33%), red';
const outline = '1px solid #0B5FFF';


const StyledSelect = styled(Select)`
&& {
  background: ${({ variant }) => (variant === 'filled' ? gradientBg : 'none')};
  border: ${({ variant }) => (variant === 'filled' ? 'none' : outline)};
  height: 44px;
  border-radius: 4px;
  color: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;

  & .icon {
    fill: ${({ variant }) => (variant === 'filled' ? 'white' : '#0B5FFF')};
    margin-right: 10px;
  }

  & .selectMenu {
    padding: 12px 50px 12px 30px;
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
  } = props;

  return (
    <StyledSelect
      variant={filled ? 'filled' : 'outlined'}
      displayEmpty
      value=""
      onChange={changeSelected}
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
};


Dropdown.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
};
