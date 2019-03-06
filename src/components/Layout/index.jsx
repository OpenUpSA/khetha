import React, { Component } from 'react';
import t from 'prop-types';


import Markup from './Markup';
import ScrollDirectionListener from './ScrollDirectionListener';


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: true,
    };

    this.values = {
      windowListener: null,
    };
  }


  componentDidMount() {
    const toggleMenu = menuActive => this.setState({ menuActive });
    this.values.windowListener = new ScrollDirectionListener('down', toggleMenu);
  }


  componentWillUnmount() {
    const { windowListener } = this.values;

    if (windowListener) {
      return windowListener.stop();
    }

    return null;
  }


  reactToScroll = (scrolledDown) => {
    const { menuActive } = this.state;

    if (menuActive && scrolledDown) {
      return this.setState({ menuActive: false });
    }

    if (!menuActive && !scrolledDown) {
      return this.setState({ menuActive: true });
    }

    return null;
  }


  render() {
    const { props, state } = this;

    const passedProps = {
      menuActive: state.menuActive,
      ...props,
    };

    return <Markup {...passedProps} />;
  }
}


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
  clickCallback: t.func,
  /** TODO */
  onMenuButtonPress: t.func,
  /** Determines whether the layout should be rendered at full screen width */
  fullscreen: t.bool,
};


Layout.defaultProps = {
  header: true,
  footer: true,
  clickCallback: null,
  points: 0,
  fullscreen: true,
  onMenuButtonPress: null,
};
