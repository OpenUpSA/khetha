import React from 'react';


import { InfoWrapper, Heading, InfoDescription } from './styled';


const Info = ({ title, description, children }) => (
  <InfoWrapper>
    <Heading gutterBottom component="h1">{title}</Heading>
    <InfoDescription component="p">{description}</InfoDescription>
    {children}
  </InfoWrapper>
);


export default Info;
