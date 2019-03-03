import React from 'react';


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
