import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


class GradientSelect extends Component {
  constructor(props) {
    super(props);
    const { selected: value } = this.props;

    this.state = {
      selected: value || null,
    };
  }

  changeSelected = (value) => {
    const { options, onSelectionChange } = this.props;
    const { reset } = options.find(({ text }) => text === value) || {};
    const selected = reset ? null : value;
    this.setState({ selected });

    if (onSelectionChange) {
      return onSelectionChange(selected);
    }

    return null;
  }

  render() {
    const { props, state, ...events } = this;

    const passedProps = {
      selected: state.selected,
      placeholder: props.placeholder,
      options: props.options,
      filled: props.primary,
      full: props.fullWidth,
      changeSelected: events.changeSelected,
      prefix: props.prefix,
    };

    return <Markup {...passedProps} />;
  }
}


export default GradientSelect;


GradientSelect.propTypes = {
  /** An array of objects that describe an option
   * and what should happen when it is clicked */
  options: t.arrayOf(
    t.shape({
      id: t.string,
      text: t.string,
      reset: t.bool,
    }),
  ).isRequired,
  /** Forces the dropdown to have a certain value selected when it renders  */
  value: t.string,
  /** The text to show when no option has been selected */
  placeholder: t.string,
  /** Whether to replace the normal background colour
   * with the brand gradient */
  filled: t.bool,
  /** Whether the button should span the entirity (100%)
   * of the width of it's parent. */
  full: t.bool,
  /** Calls this function with the value of selection
   * option as first parameter */
  callback: t.func,
  /** String applied before (styled as lable) value
  in button when a value is selected */
  prefix: t.string,
};


GradientSelect.defaultProps = {
  placeholder: 'Select an option',
  filled: false,
  callback: null,
  full: false,
  prefix: null,
  value: null,
};
