import React, { Fragment } from 'react';
import t from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './Header';
import Footer from './Footer';
import {
  FooterWrapper,
  GlobalStyling,
  Wrapper,
  InnerWrapper,
} from './styled';

const buildFooter = (onMenuClick, demo) => (
  <FooterWrapper {...{ demo }}>
    <Footer {...{ onMenuClick }} />
  </FooterWrapper>
);


const Layout = (props) => {
  const {
    children,
    points,
    header = true,
    footer = true,
    onMenuClick,
    fullscreen,
  } = props;


  return (
    <Fragment>
      <CssBaseline />
      <GlobalStyling />
      <Wrapper {...{ fullscreen }}>
        <InnerWrapper {...{ fullscreen }}>
          {header && <Header {...{ points }} />}
          {children}
        </InnerWrapper>
        {footer && buildFooter(onMenuClick)}
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
  onMenuClick: t.func.isRequired,
};


Layout.defaultProps = {
  header: true,
  footer: true,
  points: 0,
};
