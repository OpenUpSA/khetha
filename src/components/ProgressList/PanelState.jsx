import React, { Component, createRef } from 'react';
import scrollIntoView from 'scroll-into-view';
import Panel from './Panel';


const calcOpenState = (open, index, guided, focused) => {
  if (!guided) {
    return open;
  }

  if (focused === index) {
    return true;
  }

  return false;
};


class PanelState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.values = {
      focusElement: createRef(),
    };
  }

  componentWillReceiveProps() {
    const { current } = this.values.focusElement;

    if (current) {
      scrollIntoView(current);

      if (current.focus) {
        return current.focus({
          preventScroll: true,
        });
      }
    }

    return null;
  }


  toggleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      incremental: props.incremental,
      buttons: props.buttons,
      progress: props.progress,
      title: props.title,
      summary: props.summary,
      content: props.content,
      highlighted: props.highlighted,
      open: calcOpenState(state.open, props.index, props.guided, props.focused),
      toggleOpen: events.toggleOpen,
      index: props.index,
      error: props.error,
      next: props.next,
      focusElement: values.focusElement,
      changeFocus: props.changeFocus,
      guided: props.guided,
    };

    return <Panel {...passedProps} />;
  }
}


export default PanelState;
