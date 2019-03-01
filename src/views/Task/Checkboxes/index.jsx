import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


class Checkboxes extends Component {
  constructor(props) {
    super(props);
    const { forceValue, options } = this.props;
    const realValue = forceValue ? forceValue.split(', ') : options.map(() => null);

    this.state = {
      value: realValue || null,
    };
  }


  updateValue = (index, newValue) => {
    const { value: currentValue } = this.state;
    const value = [
      ...currentValue.slice(0, index),
      newValue,
      ...currentValue.slice(index + 1),
    ];

    this.setState({ value });
  }


  render() {
    const { props, state, ...events } = this;
    return <Markup value={props.value} updateValue={events.updateValue} />;
  }
}


export default Checkboxes;


Checkboxes.propTypes = {
  forceValue: t.arrayOf(t.string),
  options: t.arrayOf(t.string).isRequired,
};

Checkboxes.defaultProps = {
  forceValue: null,
};
