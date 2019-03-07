import React, { Component } from 'react';
import t from 'prop-types';


class StateController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
    };
  }

  updateAnswer = answer => this.setState({ answer });

  saveAnswer = (rawValue) => {
    const { answer } = this.state;
    const { next } = this.props;

    const value = rawValue.value ? rawValue : { ...rawValue, value: answer };
    return next(value);
  }

  render() {
    const { props, state, ...events } = this;
    const Presentation = props.presentation;

    const passedProps = {
      answer: state.answer,
      next: props.next,
      focusElement: props.focusElement,
      options: props.options,
      id: props.id,
      updateAnswer: events.updateAnswer,
      saveAnswer: events.saveAnswer,
    };

    return <Presentation {...passedProps} />;
  }
}


export default StateController;

StateController.propTypes = {
  next: t.func,
};


StateController.defaultProps = {
  next: null,
};