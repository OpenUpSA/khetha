import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainHeading from '../components/MainHeading';
import Button from '@material-ui/core/Button';

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

const ButtonHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const OutlinedButton = styled(Link)`
  && {
    width: 135px;
    height: 50px;
    margin-right: 10px;
    font-size: 16px;
    background: linear-gradient(143.13deg, #00F260 0%, #0575E6 83.33%), #0576E6;
    border-radius: 2px;
    box-sizing: border-box;
    color: #01C98B;
    display: block;
    padding: 1px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 2;
  }
`;

const ButtonText = styled.span`
  align-items: center;
  background: #fafafa;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background .5s ease;
  width: 100%;
`;

const FilledButton = styled(Button)`
  && {
    color: white;
    width: 135px;
    height: 50px;
    border-radius: 2px;
    background: linear-gradient(143.13deg, #00F260 0%, #0575E6 83.33%), #0576E6;
    font-size: 16px;
  }
`;

const LandingPage = () => (
  <React.Fragment>
    <StyledWrapper>
      <MainHeading text="What is Kheta?" />
      <SubHeading>
        Kheta is a platform that allows you and your
        community to make your voice heard during the 2019 election.
      </SubHeading>
      <ButtonHolder>
        <OutlinedButton to="/">
          <ButtonText>Skip</ButtonText>
        </OutlinedButton>
        <FilledButton variant="contained">
          Start
        </FilledButton>
      </ButtonHolder>
    </StyledWrapper>
  </React.Fragment>
);

export default LandingPage;
