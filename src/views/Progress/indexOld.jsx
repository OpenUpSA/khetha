import React, { Fragment } from 'react';
import styled from 'styled-components';


import ProgressCards from '../../components/ProgressCards';


const StyledWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  min-height: 100vh;
  overflow: scroll;
  left: 0px;
  right: 0px;
  padding: 20px 15px;
  @media (min-width: 760px) {
    max-width: 400px;
    margin: auto;
  }
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Fragment>
    <StyledWrapper>
      <ProgressCards />
    </StyledWrapper>
  </Fragment>
);
