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


const createAnimatingFooter = (menuActive, callback) => matches => (
  <Animate pose={(!matches && menuActive) ? 'hidden' : 'show'}>
    <Footer {...{ callback }} />
  </Animate>
);


const buildFooter = (callback, menuActive) => (
  <FooterWrapper>
    <MediaQuery query="(min-height: 750px)">
      {createAnimatingFooter(menuActive, callback)}
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
        {!isolated && buildFooter(onMenuButtonPress, menuActive)}
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
  points: t.number.isRequired,
  /** Shows content of the web page without the layout header and footer */
  isolated: t.bool,
  /** A callback function that will be fired when a user clicks
   * on a button in the footer. Function will take one of
   * the following as it's first parameter: 'progress', 'start'
   * or 'profile'. This will likely be 'navigate' from import { navigate } from 'gatsby' */
  onMenuButtonPress: t.func.isRequired,
  /** Determines the width of the Layout on the screen. */
  fullscreen: t.bool,
  /** Determines whether to hide or show the menu. */
  menuActive: t.bool,
};

Markup.defaultProps = {
  isolated: false,
  fullscreen: false,
  menuActive: false,
};
