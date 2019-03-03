import React, { Fragment } from 'react';


import Input from './Input';
import { BodyText } from './styled';


const Content = (props) => {
  const {
    format,
    description,
    options,
  } = props;

  return (next) => {
    const inputProps = {
      format,
      options,
      next,
    };

    return (
      <Fragment>
        <BodyText>{description}</BodyText>
        <Input {...inputProps} />
      </Fragment>
    );
  };
};


export default Content;
