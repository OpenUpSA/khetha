/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Markup from './Markup';


class IconSelector extends Component {
  handleChange = (event) => {
    const { value } = event.target;
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { handleChange } = this;
    const { value } = this.props;
    return <Markup {...{ value, handleChange }} />;
  }
}


export default IconSelector;
