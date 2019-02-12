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
      if (updateCallback) {
        updateCallback(index, newValue);
      }
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
      onComplete: props.onComplete,
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
  /** If this Progresslist is guided (by means of 'onComplete') then you can
   * fire this callback everytime a value is selected in a panel */
  updateCallback: t.func,
  /** If a function is passed, then a user is expected to complete all items inside
   * the panels. Once all items are completed a 'submit' button will appear that
   * triggers this function as a callback when clicked. If a function is passed,
   * then users will be guided through the panels in a linear fashion. This means
   * that only one item can be opened at a time and that the first item starts
   * openend. */
  onComplete: t.func,
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
      content: t.func,
      highlighted: t.bool,
    }),
  ),
};


ProgressList.defaultProps = {
  updateCallback: null,
  onComplete: null,
  incremental: false,
  buttons: false,
  items: null,
};
