import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '../../components/Layout';


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default () => (
  <Layout header={false} footer={false}>
    <Wrapper>
      <CircularProgress size={65} />
    </Wrapper>
  </Layout>
);
