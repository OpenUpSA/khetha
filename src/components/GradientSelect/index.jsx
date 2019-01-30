import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleComponent from './ToggleComponent';


class GradientSelect extends Component {
  state = {
    selected: null,
  }

  changeSelected = (event, force) => {
    const { callback } = this.props;
    const { value } = event.target;

    if (force) {
      return this.setState({ selected: force });
    }

    this.setState({ selected: value });
    return callback && callback();
  }

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      selected: state.selected,
      placeholder: props.placeholder,
      options: props.options,
      filled: props.filled,
      changeSelected: events.changeSelected,
    };

    return <ToggleComponent {...passedProps} />;
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
    }),
  ).isRequired,
  /** The text to show when no option has been selected */
  placeholder: PropTypes.string,
  /** Whether to replace the normal background colour
   * with the brand gradient */
  filled: PropTypes.bool,
  /** Calls this function with the value of selection
   * option as first parameter */
  callback: PropTypes.func,
};


GradientSelect.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
  callback: null,
};
