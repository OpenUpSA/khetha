import React, { Fragment } from 'react';
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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LandingPage = () => (
  <Fragment>
    <StyledWrapper>
      <MainHeading title="Log In" />
      <SubHeading
        text="In order to save your progress you need to
        sign in to Kheta with one of the following
        services:"
      />
      <ButtonHolder>
        <FilledButton text="Login with Google" link="/" width="100%" background="#db3236" font="none" justify="flex-start" />
        <FilledButton text="Login with Facebook" link="/" width="100%" background="#3C5A99" font="none" justify="flex-start" />
        <FilledButton text="Login with Instagram" link="/" width="100%" background="linear-gradient(90deg, #FDF496 -15%, #fd5949 23%,#d6249f 60%,#285AEA 125%);" font="none" justify="flex-start" />
        <FilledButton text="Login with Twitter" link="/" width="100%" background="#1DA1F2" font="none" justify="flex-start" />
        <OutlinedButton text="Login with Email" link="/" width="100%" />
      </ButtonHolder>
    </StyledWrapper>
  </Fragment>
);

export default LandingPage;
