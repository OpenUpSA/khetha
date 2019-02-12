import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import t from 'prop-types';
import MenuHeader from './MenuHeader';
import Footer from './Footer';


const GlobalStyling = createGlobalStyle`
  html {
    overflow-y: scroll !important;
  }
`;


const Wrapper = styled.div`
  background: #EDEDED;
  min-height: ${({ demo }) => (demo ? '100px' : '100vh')};
  padding: 30px;
  padding-bottom: 200px;
`;

const InnerWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;


const FooterWrapper = styled.div`
  position: ${({ demo }) => (demo ? 'absolute' : 'fixed')};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;


const buildFooter = (callback, demo) => (
  <FooterWrapper {...{ demo }}>
    <Footer {...{ callback }} />
  </FooterWrapper>
);


const Layout = (props) => {
  const {
    children,
    points,
    header = true,
    footer = true,
    callback,
    demo,
  } = props;


  return (
    <Fragment>
      <GlobalStyling />
      <Wrapper {...{ demo }}>
        <InnerWrapper>
          {header && <MenuHeader {...{ points }} />}
          {children}
        </InnerWrapper>
        {footer && buildFooter(callback, demo)}
      </Wrapper>
    </Fragment>
  );
};


export default Layout;


Layout.propTypes = {
  /** Components to show between the header and footer.
   * This will likely be the contents of a specific view */
  children: t.node.isRequired,
  /** The amount of points that the user current has.
   * This is used to calculate the badge and 'points required'
   * prompt shown in the header. */
  points: t.number,
  /** Whether to show the heeder on this page. If false, then header will not be shown. */
  header: t.bool,
  /** Whether to show the footer on this page. If false, then footer will not be shown. */
  footer: t.bool,
  /** A callback function that will be fired when a user clicks
   * on a button in the footer. Function will take one of
   * the following as it's first parameter: 'progress', 'start'
   * or 'profile'. This will likely be 'navigate' from import { navigate } from 'gatsby' */
  callback: t.func,
  /** Whether you are using the component for demo purposes.
   * If set to true footer will be set to 'absolute' and not
   * 'fixed' (in order to respect the constraints of the
   * demo window). In addition, min-height will be set to
   * 100px instead of 100vh (in order to make scroll easier
   * in documentation) */
  demo: t.bool,
};


Layout.defaultProps = {
  header: true,
  footer: true,
  demo: false,
  callback: null,
  points: 0,
};
