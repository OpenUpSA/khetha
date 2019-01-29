import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';


const Wrapper = styled.div`
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-auto-rows: minmax(100px, auto);
      grid-gap: 1em;
      justify-items: stretch;
      align-items: stretch;
`;

const PageWrapper = props => {
    return (
        <div>
            <Grid container justify="center">
            </Grid>
        </div>
    );
};

export default PageWrapper;