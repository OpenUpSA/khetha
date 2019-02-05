import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';


const Text = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    padding: 0 10px;
  }
`;


const Wrapper = styled.div`
  border-bottom: 1px solid #D0D0D0;
  margin-bottom: ${({ gutter }) => (gutter ? '15px' : 0)};
`;


const SectionHeading = ({ text, id, gutter }) => (
  <Wrapper {...{ id, gutter }}>
    <Text>{text}</Text>
  </Wrapper>
);


export default SectionHeading;
