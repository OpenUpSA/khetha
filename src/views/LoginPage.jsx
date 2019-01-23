import React from 'react';
import styled from 'styled-components';

import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';

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

const LandingPage = () => (
  <React.Fragment>
    <StyledWrapper>
      <MainHeading text="Log In" />
      <SubHeading
        text="In order to save your progress you need to
        sign in to Kheta with one of the following
        services:"
      />
    </StyledWrapper>
  </React.Fragment>
);

export default LandingPage;
