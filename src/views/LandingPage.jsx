import React from 'react';
import styled from 'styled-components';

import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';


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

const ButtonHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LandingPage = () => (
  <React.Fragment>
    <StyledWrapper>
      <MainHeading text="What is Kheta?" />
      <SubHeading
        text="Kheta is a platform that allows you and your
        community to make your voice heard during the 2019 election."
      />
      <ButtonHolder>
        <OutlinedButton text="skip" link="/login" />
        <FilledButton text="start" link="/login" />
      </ButtonHolder>
    </StyledWrapper>
  </React.Fragment>
);

export default LandingPage;
