import React, { Component } from 'react';
import t from 'prop-types';

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

export { Markup };
export default IconSelector;

IconSelector.propTypes = {
  onChange: t.func,
  value: t.string,
};

IconSelector.defaultProps = {
  onChange: null,
  value: null,
};
