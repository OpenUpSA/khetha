/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import iconsObject from '../../../components/Icon/iconsObject';


const Wrapper = styled.form`
  display: inline-block;
  box-shadow: none;
  background-color: rgb(255, 255, 255);
  color: rgb(68, 74, 87);
  position: relative;
  font-size: 15px;
  line-height: 1.5;
  margin: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(223, 223, 227);
  border-image: initial;
  border-radius: 0px 5px 5px;
  outline: 0px;
  transition: border-color 0.2s ease 0s;
`;


const StyledSelect = styled(Select)`
  & .select {
    padding: 14px 28px !important;
  }

  &::before {
    border: 0px solid transparent !important;
  }
`;


const buildIcons = iconsObject => Object.keys(iconsObject).map((key) => {
  const Icon = iconsObject[key];

  return (
    <MenuItem value={key}>
      <Icon />
    </MenuItem>
  );
});

const Markup = ({ value, handleChange: onChange }) => (
  <div>
    <Wrapper>
      <FormControl>
        <StyledSelect {...{ onChange, value }} classes={{ select: 'select' }}>
          {buildIcons(iconsObject)}
        </StyledSelect>
      </FormControl>
    </Wrapper>
  </div>
);


export default Markup;
