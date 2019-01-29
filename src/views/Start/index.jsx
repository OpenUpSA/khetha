import React, { Component } from 'react';
import Markup from './Markup';


export default class Start extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    const { state, props } = this.state;

    const passedProps = {
      loading: state.loading,
      translation: props.translation,
      tasks: props.tasks,
    };

    return <Markup {...passedProps} />;
  }
}
