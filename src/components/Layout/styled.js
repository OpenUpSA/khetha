import styled, { createGlobalStyle } from 'styled-components';
import { Typography } from '@material-ui/core';
import posed from 'react-pose';


const Animate = posed.div({
  show: { y: 0 },
  hidden: { y: 75 },
});


const GlobalStyling = createGlobalStyle`
  body {
    padding: 0 !important; 
    overflow-y: scroll !important;
  }
`;


const Wrapper = styled.div`
  background: #EDEDED;
  min-height: 100vh;
  padding: ${({ fullscreen }) => (fullscreen ? '0' : '30px 14px 110px')};
`;


const InnerWrapper = styled.div`
  max-width: ${({ fullscreen }) => (fullscreen ? '100%' : '600px')};
  margin: 0 auto;
`;


const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;


const Level = styled(Typography)`
  && {
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #5f5f5f;
  }
`;

const Next = styled(Typography)`
  font-size: 14px;
  color: #5f5f5f;
`;

const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 30px;

`;


const Text = styled.div`
  flex-grow: 1;
  text-align: right;
`;


export {
  Animate,
  GlobalStyling,
  Wrapper,
  InnerWrapper,
  FooterWrapper,
  Level,
  Next,
  HeaderMenu,
  Text,
};


export default {
  GlobalStyling,
  Wrapper,
  InnerWrapper,
  FooterWrapper,
  Level,
  Next,
  HeaderMenu,
  Text,
};
