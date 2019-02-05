import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';


class GradientSelect extends Component {
  state = {
    selected: this.props.value || null,
  }

  changeSelected = (value) => {
    const { options } = this.props;
    const { callback, reset } = options.find(({ text }) => text === value) || {};
    const selected = reset ? null : value;
    this.setState({ selected });

    if (callback) {
      return callback(selected);
    }

    return null;
  }

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      selected: state.selected,
      placeholder: props.placeholder,
      options: props.options,
      filled: props.filled,
      full: props.full,
      changeSelected: events.changeSelected,
      prefix: props.prefix,
    };

    return <Dropdown {...passedProps} />;
  }
}


export default GradientSelect;


GradientSelect.propTypes = {
  /** An array of objects that describe an option
   * and what should happen when it is clicked */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      callback: PropTypes.func,
      reset: PropTypes.bool,
    }),
  ).isRequired,
  /** The text to show when no option has been selected */
  placeholder: PropTypes.string,
  /** Whether to replace the normal background colour
   * with the brand gradient */
  filled: PropTypes.bool,
  /** Whether the button should span the entirity (100%)
   * of the width of it's parent. */
  full: PropTypes.bool,
  /** Calls this function with the value of selection
   * option as first parameter */
  callback: PropTypes.func,
  /* String applied before (styled as lable) value
  in button when a value is selected */
  prefix: PropTypes.string,
};


GradientSelect.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
  callback: null,
  full: false,
  prefix: null,
};
