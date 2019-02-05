import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


class ProgressList extends Component {
  state = {
    focused: 0,
  }

  changeFocus = (value, index, newValue) => {
    const { items, updateCallback } = this.props;
    const { focused } = this.state;
    const limit = items.length;
    const forward = focused + 1;

    if (value === true && forward <= limit) {
      updateCallback(index, newValue);
      return this.setState({ focused: forward });
    }

    if (value <= limit) {
      return this.setState({ focused: value });
    }

    return null;
  }

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      guided: props.guided,
      incremental: props.incremental,
      buttons: props.buttons,
      items: props.items,
      focused: state.focused,
      changeFocus: events.changeFocus,
      next: (index, value) => events.changeFocus(true, index, value),
    };

    return <Markup {...passedProps} />;
  }
}


export default ProgressList;


ProgressList.propTypes = {
  /** Whether user should be guided through the panels or should be able to visit them at will */
  guided: t.bool,
  /** Whether progress is tracked incrementally. If true
   * then progress is indicate by percentage (0 - 100),
   * if false then progress can only be true or false */
  incremental: t.bool,
  /** Whether entire panels should trigger an open/close action.
   * If you have button or links inside the panel you probably
   * want to set this to false */
  buttons: t.bool,
  /** An array of panels to display with the required data */
  items: t.arrayOf(
    t.shape({
      progress: t.oneOfType([t.number, t.bool]),
      title: t.string,
      summary: t.oneOfType([t.string, t.array]),
      content: t.oneOfType([t.node, t.func]),
      highlighted: t.bool,
    }),
  ),
};


ProgressList.defaultProps = {
  guided: false,
  incremental: false,
  buttons: false,
  items: null,
};
