import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import {
  Wrapper,
  Loader,
} from './styled';


export default () => (
  <Fragment>
    <CssBaseline />
    <Wrapper>
      <Loader size={150} />
    </Wrapper>
  </Fragment>
);
