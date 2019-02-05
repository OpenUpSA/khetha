import React from 'react';
import styled from 'styled-components';
import MenuHeader from './MenuHeader';

const Wrapper = styled.div`
  background: #EDEDED;
`;


export default ({ children, points = 0 }) => (
  <Wrapper>
    <MenuHeader {...{ points }} />
    {children}
  </Wrapper>
);
