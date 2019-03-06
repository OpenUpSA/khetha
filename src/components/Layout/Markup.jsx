import React, { Fragment } from 'react';
import t from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MediaQuery from 'react-media';


import Header from './Header';
import Footer from './Footer';
import {
  FooterWrapper,
  GlobalStyling,
  Wrapper,
  InnerWrapper,
  Animate,
} from './styled';


const createAnimatingFooter = (menuActive, callback, forceMenu) => matches => (
  <Animate pose={(!matches && menuActive && !forceMenu) ? 'hidden' : 'show'}>
    <Footer {...{ callback }} />
  </Animate>
);


const buildFooter = (callback, menuActive, forceMenu) => (
  <FooterWrapper>
    <MediaQuery query="(min-height: 750px)">
      {createAnimatingFooter(menuActive, callback, forceMenu)}
    </MediaQuery>
  </FooterWrapper>
);


const Markup = (props) => {
  const {
    children,
    points,
    isolated,
    onMenuButtonPress,
    fullscreen,
    menuActive,
    forceMenu,
  } = props;


  return (
    <Fragment>
      <CssBaseline />
      <GlobalStyling />
      <Wrapper {...{ fullscreen }}>
        <InnerWrapper {...{ fullscreen }}>
          {!isolated && <Header {...{ points }} />}
          {children}
        </InnerWrapper>
        {!isolated && buildFooter(onMenuButtonPress, menuActive, forceMenu)}
      </Wrapper>
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
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
  clickCallback: t.func,
};

Markup.defaultProps = {
  header: true,
  footer: true,
  clickCallback: null,
  points: 0,
};
