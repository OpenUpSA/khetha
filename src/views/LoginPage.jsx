import React from 'react';
import styled from 'styled-components';

import MainHeading from '../components/MainHeading';

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

const SubHeading = styled.h3`
  position: relative;
  text-align: center;
  font-size: 17px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #8C8C8C;
  max-width: 295px;
  margin: 0 0 30px 0;
`;

const LandingPage = () => (
  <React.Fragment>
    <StyledWrapper>
      <MainHeading text="Log In" />
      <SubHeading>
        In order to save your progress you need to
        sign in to Kheta with one of the following
        services:
      </SubHeading>
    </StyledWrapper>
  </React.Fragment>
);

export default LandingPage;
