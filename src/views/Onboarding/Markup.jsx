import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import MainHeading from '../../components/MainHeading';
import SubHeading from '../../components/SubHeading';


const StyledWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  position: relative;
  height: 100vh;
  left: 0px;
  right: 0px;
  padding: 0 40px;
  @media (min-width: 760px) 
  {
    max-width: 400px;
    margin: auto
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;


const LanguageDropdown = (language, changeLanguage) => (
  <StyledFormControl>
    <InputLabel htmlFor="select-language">Select Language</InputLabel>
    <Select
      onChange={changeLanguage}
      value={language || ''}
      inputProps={{
        name: 'language',
        id: 'select-language',
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="zu">Zulu</MenuItem>
    </Select>
  </StyledFormControl>
);


const buildCta = (language, selectLanguage) => {
  if (language) {
    return <Button>Start</Button>;
  }

  return LanguageDropdown(language, selectLanguage);
};


const Markup = ({ language, selectLanguage }) => (
  <Fragment>
    <StyledWrapper>
      <MainHeading title="What is Kheta?" />
      <SubHeading
        text="Kheta is a platform that allows you and your community to make your voice heard during the 2019 election."
      />
      {buildCta(language, selectLanguage)}
    </StyledWrapper>
  </Fragment>
);


export default Markup;


Markup.propTypes = {
  language: PropTypes.string,
  selectLanguage: PropTypes.func.isRequired,
};

Markup.defaultProps = {
  language: null,
};
