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
  text: t.string,
  id: t.string,
  reset: t.string,
  disabled: t.bool,
};

Item.defaultProps = {
  text: null,
  id: null,
  reset: null,
  disabled: false,
};
