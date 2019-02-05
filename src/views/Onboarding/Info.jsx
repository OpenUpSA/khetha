import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 40px 20px 15px;
`;


const Heading = styled(Typography)`
  && {
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
  }
`;

const Description = styled(Typography)`
  && {
    font-size: 16px;
    color: #8C8C8C;
    margin-bottom: 35px;
  }
`;


const Info = ({ title, description, children }) => (
  <Wrapper>
    <Heading gutterBottom component="h1">{title}</Heading>
    <Description component="p">{description}</Description>
    {children}
  </Wrapper>
);


export default Info;
