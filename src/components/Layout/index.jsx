import React from 'react';
import styled from 'styled-components';
import MenuHeader from './MenuHeader';
import Footer from '../Footer';
import './global.css';


const Wrapper = styled.div`
  background: #EDEDED;
  min-height: 100vh;
  padding: 30px;
  padding-bottom: 200px;
`;

const InnerWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;


export default ({ children, points = 0 }) => (
  <Wrapper>
    <InnerWrapper>
      <MenuHeader {...{ points }} />
      {children}
    </InnerWrapper>
    <Footer />
  </Wrapper>
);
