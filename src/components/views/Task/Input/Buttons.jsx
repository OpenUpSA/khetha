import React from 'react';


import { ButtonWrap, FlexWrap } from './styled';
import GradientButton from '../../../global/GradientButton';
import addProps from '../../../../helpers/functions/addProps';


const ButtonWrapper = (props) => {
  const {
    text,
    answer,
    saveAnswer,
    options,
    focusElement,
    ...otherProps
  } = props;

  const passedProps = {
    ...otherProps,
    text,
  };

  return (
    <ButtonWrap>
      <GradientButton
        primary
        {...passedProps}
        active={text === answer}
        resolve="short"
        onButtonPress={() => saveAnswer({ type: 'buttons', value: text })}
      />
    </ButtonWrap>
  );
};


const Buttons = (props) => {
  const {
    answer,
    saveAnswer,
    options,
    id,
  } = props;

  const optionObjects = options.map(text => ({ text }));

  const addedProps = {
    answer,
    saveAnswer,
  };

  return (
    <FlexWrap>
      {optionObjects.map(addProps(ButtonWrapper, addedProps, 'text'))}
    </FlexWrap>
  );
};


export default Buttons;
