import React, { Component, createRef } from 'react';
import scrollIntoView from 'scroll-into-view';


import calcOpenState from './calcOpenState';
import Markup from './Markup';


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

    const htmlElement = values.focusElement.current;

    const open = calcOpenState(
      state.open,
      props.index,
      props.advance,
      props.focused,
    );

    if (props.advance && htmlElement && open) {
      scrollIntoView(htmlElement);
    }

    const passedProps = {
      incremental: props.incremental,
      buttons: props.buttons,
      progress: props.progress,
      id: props.id,
      title: props.title,
      summary: props.summary,
      content: props.content,
      highlighted: props.highlighted,
      toggleOpen: events.toggleOpen,
      index: props.index,
      error: props.error,
      next: props.next,
      changeFocus: props.changeFocus,
      advance: props.advance,
      focusElement: values.focusElement,
      open,
    };

    return <Markup {...passedProps} />;
  }
}


export default PanelState;
