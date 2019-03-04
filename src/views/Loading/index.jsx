import React from 'react';


import Layout from '../../components/Layout';
import {
  Wrapper,
  Loader,
} from './styled';


export default () => (
  <Layout header={false} footer={false}>
    <Wrapper>
      <Loader size={65} />
    </Wrapper>
  </Layout>
);
