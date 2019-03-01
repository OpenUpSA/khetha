import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


import { secondary } from '../../tokens/colors';


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Loader = styled(CircularProgress)`
  && {
    color: ${secondary};
  }
`;


export {
  Wrapper,
  Loader,
};


export default {
  Wrapper,
  Loader,
};