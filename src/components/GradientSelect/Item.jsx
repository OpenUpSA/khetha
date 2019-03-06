import React from 'react';
import t from 'prop-types';


import { StyledItem } from './styled';


const Item = (props) => {
  const {
    text,
    id,
    reset,
    disabled,
  } = props;

  const content = reset ? <em>{text}</em> : <span>{text}</span>;

  return (
    <StyledItem
      value={id}
      key={text}
      {...{ disabled }}
    >
      {content}
    </StyledItem>
  );
};


export default Item;

Item.propTypes = {
  /** The text that goes in the dropdown selection */
  text: t.string.isRequired,
  /** An index number associated with each drop down selection */
  id: t.number.isRequired,
  /** Checks whether it is specifically the reset button */
  reset: t.bool,
  /** Disables the option in the drop down */
  disabled: t.bool,
};


Item.defaultProps = {
  reset: false,
  disabled: false,
};
