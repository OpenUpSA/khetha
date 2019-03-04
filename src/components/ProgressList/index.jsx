import React, { Component } from 'react';
import t from 'prop-types';


import Markup from './Markup';


class ProgressList extends Component {
  constructor(props) {
    super(props);

    const { advance, items } = this.props;

    const pendingList = !advance ? [] : items
      .filter(({ progress }) => progress !== true && !(progress >= 100))
      .map(({ id: itemId }) => itemId);

    this.state = {
      focused: pendingList[0],
    };
  }

  changeFocus = (value, id, itemValue) => {
    const { items, onSaveAnswer, advance } = this.props;
    const { focused } = this.state;

    if (onSaveAnswer) {
      onSaveAnswer({ id, value: itemValue });
    }

    if (value || value === 0) {
      return this.setState({ focused: value });
    }

    const pendingList = !advance ? [] : items
      .filter(({ progress }) => progress !== true && !(progress >= 100))
      .map(({ id: itemId }) => itemId);

    const nextIndex = pendingList.findIndex(focusValue => focusValue > focused);

    const nextItem = pendingList[nextIndex] || pendingList[0];

    if (advance && nextItem) {
      this.setState({ focused: nextItem });
      return null;
    }

    return null;
  }

  render() {
    const { props, state, ...events } = this;

    const focused = props.overrideFocused || state.focused;

    const passedProps = {
      focused,
      pendingList: props.pendingList,
      advance: props.advance,
      incremental: props.incremental,
      buttons: props.buttons,
      items: props.items,
      changeFocus: events.changeFocus,
      next: id => value => events.changeFocus(null, id, value),
    };

    return <Markup {...passedProps} />;
  }
}


export default ProgressList;


ProgressList.propTypes = {
  /** If this Progresslist is guided (by means of 'onComplete') then you can
   * fire this callback every time a value is selected in a panel */
  updateCallback: t.func,
  /** If true then users will be guided through the panels in a linear fashion. This means
   * that only one item can be opened at a time and that the first item starts
   * openend. */
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
      content: t.func,
      highlighted: t.bool,
    }),
  ),
  /** Property given to list when progress is complete and user can advance to
   * the next stage/level */
  advance: t.bool,
  /** Function that is called to automatically save an answer if input value changes */
  onSaveAnswer: t.func,
};


ProgressList.defaultProps = {
  updateCallback: null,
  guided: false,
  incremental: false,
  buttons: false,
  items: null,
  advance: false,
  onSaveAnswer: null,
};
