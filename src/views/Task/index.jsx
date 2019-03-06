import React, { Component } from 'react';
import t from 'prop-types';


import { titles } from './filters';
import buildCreateItems from './buildCreateItems';
import createModalProps from './createModalProps';
import createFilterOption from './createFilterOption';
import Markup from './Markup';


const getTimestamp = () => new Date().getTime();


class Task extends Component {
  constructor(props) {
    super(props);
    const { questions = [], answers: initialAnswers } = this.props;

    const answers = initialAnswers || questions.map(() => null);

    this.state = {
      answers,
      filter: 0,
      modalOpen: null,
    };
  }


  toggleModal = () => {
    const { modalOpen } = this.state;
    return this.setState({ modalOpen: !modalOpen });
  }


  completeTask = () => {
    const { onTaskSubmit, taskPoints: points } = this.props;
    const { answers } = this.state;

    if (onTaskSubmit) {
      return onTaskSubmit(answers, points);
    }

    return null;
  }


  changeAnswer = ({ id, value }) => {
    const { onQuestionSave } = this.props;
    const { answers: currentAnswers } = this.state;
    const baseAnswer = currentAnswers[id];
    const isFirstUpdate = !currentAnswers[id];


    if (!value) {
      return null;
    }

    const answers = [
      ...currentAnswers.slice(0, id),
      value.value,
      ...currentAnswers.slice(id + 1),
    ];

    this.setState({ answers });

    if (!onQuestionSave) {
      return null;
    }

    const newAnswer = {
      value: value.value,
      answered: isFirstUpdate ? getTimestamp() : currentAnswers[id],
      edits: !isFirstUpdate ? baseAnswer.edits : 0,
      lastEdit: !isFirstUpdate ? getTimestamp() : null,
    };

    return onQuestionSave({ index: id, value: newAnswer });
  };


  changeFilter = filter => this.setState({ filter });


  render() {
    const {
      props,
      state,
      ...events
    } = this;

    const all = state.answers.length;
    const pending = state.answers.filter(answer => !answer).length;

    const amounts = {
      all,
      pending,
      completed: all - pending,
    };

    const filterOptions = titles.map(createFilterOption(amounts));
    const modalOpen = state.modalOpen === null && amounts.pending <= 0;

    const modalProps = createModalProps({
      modalOpen: modalOpen && !props.submitted,
      toggleModal: events.toggleModal,
      completeTask: events.completeTask,
    });

    const createItems = buildCreateItems({
      questions: props.questions,
      answers: state.answers,
      filter: state.filter,
    });

    const passedProps = {
      ...props,
      modalProps,
      createItems,
      filterOptions,
      completed: amounts.pending <= 0,
      title: props.title,
      changeAnswer: events.changeAnswer,
      changeFilter: events.changeFilter,
      filter: state.filter,
      points: props.points,
      completeTask: events.completeTask,
      onMenuButtonPress: props.onMenuButtonPress,
      isolated: props.isolated,
      logo: props.logo,
    };

    return <Markup {...passedProps} />;
  }
}


export default Task;


Task.propTypes = {
  onSubmit: t.func.isRequired,
  onAnswerChange: t.func.isRequired,
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
