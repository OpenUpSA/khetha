import React, { Fragment } from 'react';
import styled from 'styled-components';

import MainHeading from '../components/MainHeading';
import StartCards from '../components/StartCards';
import Footer from '../components/Footer';

const StyledWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  position: relative;
  height: calc(100vh - 75px);
  overflow: scroll;
  left: 0px;
  right: 0px;
  padding: 20px 15px;
  @media (min-width: 760px) 
  {
    max-width: 400px;
    margin: auto
  }
  background: #E5E5E5;
  display: flex;
  flex-direction: column;
`;

const StartPage = () => (
  <Fragment>
    <StyledWrapper>
      <MainHeading title="Kheta" color="#5F5F5F" />
      <StartCards />
    </StyledWrapper>
    <Footer />
  </Fragment>
);

export default StartPage;
