import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


class Task extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props;

    this.state = {
      answers: questions.map(() => null),
    };
  }


  changeAnswer = (index, answer) => {
    const { answers: currentAnswers } = this.state;

    const answers = [
      ...currentAnswers.slice(0, index),
      answer,
      ...currentAnswers.slice(index + 1),
    ];

    return this.setState({ answers });
  }


  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      answers: state.answers,
      questions: props.questions,
      progress: props.progress,
      changeAnswer: events.changeAnswer,
      onComplete: props.onComplete,
    };

    return <Markup {...passedProps} />;
  }
}


export default Task;


Task.propTypes = {
  onComplete: t.func.isRequired,
  questions: t.arrayOf(
    t.shape({
      title: t.string,
      description: t.string,
      format: t.oneOf([
        'string',
        'text',
        'boolean',
        'select',
        'checkboxes',
        'gps',
      ]),
    }),
  ).isRequired,
};
