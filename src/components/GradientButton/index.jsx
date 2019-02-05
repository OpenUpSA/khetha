import React, { Component } from 'react';
import Markup from './Markup';


class GradientButton extends Component {
  state = {
    loading: false,
  }

  startLoading = (autoKill) => {
    this.setState({ loading: true });

    if (autoKill) {
      setTimeout(
        () => this.setState({ loading: false }),
        2000,
      );
    }
  };

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      ...props,
      loading: state.loading,
      startLoading: events.startLoading,
    };

    return <Markup {...passedProps} />;
  }
}


export default GradientButton;
