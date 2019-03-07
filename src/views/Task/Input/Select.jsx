import React, { Component } from 'react';
import t from 'prop-types';


import SelectMarkup from './SelectMarkup';


class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manual: false,
      answer: null,
    };
  }

  activateManual = () => this.setState({ manual: true });

  calcIfOther = (id) => {
    const { options } = this.props;
    return /^other$/i.test(options[id]);
  }

  updateAnswer = answer => this.setState({ answer });

  manualSave = () => {
    const { saveAnswer } = this.props;
    const { answer } = this.state;

    return saveAnswer({ type: 'select', value: answer, manual: true });
  }

  dropDownSave = (value) => {
    const { saveAnswer } = this.props;
    return saveAnswer({ type: 'select', value, manual: true });
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      answer: state.answer,
      manual: state.manual,
      activateManual: events.activateManual,
      updateAnswer: events.updateAnswer,
      manualSave: events.manualSave,
      dropDownSave: events.dropDownSave,
      calcIfOther: events.calcIfOther,
      options: props.options,
    };

    return <SelectMarkup {...passedProps} />;
  }
}


export default Select;


Select.propTypes = {
  saveAnswer: t.func,
  options: t.arrayOf(t.string),
};


Select.defaultProps = {
  saveAnswer: null,
  options: null,
};
