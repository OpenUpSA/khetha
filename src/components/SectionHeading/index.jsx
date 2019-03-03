import React from 'react';


import { Text, Wrapper } from './styled';


const SectionHeading = ({ text, id, gutter }) => (
  <Wrapper {...{ id, gutter }}>
    <Text>{text}</Text>
  </Wrapper>
);


export default SectionHeading;
