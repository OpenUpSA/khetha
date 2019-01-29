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


const LanguageDropdown = (language, changeLanguage, cta) => (
  <StyledFormControl autoComplete="off">
    <InputLabel htmlFor="select-language">{cta}</InputLabel>
    <Select
      onChange={changeLanguage}
      value={language || ''}
      inputProps={{
        name: 'language',
        id: 'select-language',
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="zu">isiZulu</MenuItem>
    </Select>
  </StyledFormControl>
);


const buildCta = (language, selectLanguage, cta, progressOnboarding) => {
  if (language) {
    return <Button onClick={progressOnboarding}>{cta}</Button>;
  }

  return LanguageDropdown(language, selectLanguage, cta);
};


const Step0 = (props) => {
  const {
    language,
    selectLanguage,
    translation,
    progressOnboarding,
  } = props;

  const { title, description, primary } = translation.intro;

  return (
    <Fragment>
      <StyledWrapper>
        <MainHeading {...{ title }} />
        <SubHeading
          text={description}
        />
        {buildCta(language, selectLanguage, primary, progressOnboarding)}
      </StyledWrapper>
    </Fragment>
  );
};


export default Step0;


const translationSchema = PropTypes.shape({
  intro: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    primary: PropTypes.string,
  }),
  prizes: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    primary: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  }),
  alert: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    primary: PropTypes.string,
  }),
});


Step0.propTypes = {
  language: PropTypes.string,
  selectLanguage: PropTypes.func.isRequired,
  translation: translationSchema.isRequired,
};


Step0.defaultProps = {
  language: null,
};
