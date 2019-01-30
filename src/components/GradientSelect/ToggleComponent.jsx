import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import GradientButton from '../GradientButton';


const ToggleComponent = (props) => {
  const {
    selected,
    filled,
    changeSelected,
    full,
  } = props;

  if (!selected) {
    return <Dropdown {...props} />;
  }

  return (
    <GradientButton
      {...{ filled, full }}
      clickAction={() => changeSelected(null)}
      text={selected}
      prefix="Filtered by"
      icon={CloseIcon}
    />
  );
};


export default ToggleComponent;


ToggleComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      callback: PropTypes.func,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  filled: PropTypes.bool,
  changeSelected: PropTypes.func,
  selected: PropTypes.string,
  full: PropTypes.bool,
};


ToggleComponent.defaultProps = {
  selected: null,
  placeholder: 'Select an option',
  filled: false,
  changeSelected: null,
  full: false,
};
