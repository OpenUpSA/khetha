import React, { Component } from 'react';
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


const calcFocused = (guided, index, focused) => {
  if (!guided) {
    return false;
  }

  if (index === focused) {
    return true;
  }
};


class PanelState extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      incremental: props.incremental,
      buttons: props.buttons,
      progress: props.progress,
      title: props.title,
      summary: props.summary,
      content: props.content,
      highlighted: props.highlighted,
      open: calcOpenState(state.open, props.index, props.guided, props.focused),
      guided: props.guided,
      toggleOpen: events.toggleOpen,
      index: props.index,
      error: props.error,
      next: props.next,
      changeFocus: props.changeFocus,
    };

    return <Panel {...passedProps} />;
  }
}


export default PanelState;
