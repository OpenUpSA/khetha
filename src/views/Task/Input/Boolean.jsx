import React from 'react';


import { ButtonWrap, FlexWrap } from './styled';
import GradientButton from '../../../components/GradientButton';
import addProps from '../../../helpers/addProps';


const buttons = [
  {
    text: 'Yes',
  },
  {
    text: 'No',
  },
  {
    text: "Don't know",
  },
];


const ButtonWrapper = (props) => {
  const {
    text,
    answer,
    saveAnswer,
    focusElement,
    index,
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
        onButtonPress={() => saveAnswer({ type: 'boolean', value: text })}
      />
    </ButtonWrap>
  );
};


const Boolean = (props) => {
  const {
    answer,
    saveAnswer,
    focusElement,
    options,
    id,
  } = props;

  const addedProps = {
    answer,
    saveAnswer,
    focusElement,
  };

  return (
    <FlexWrap>
      {buttons.map(addProps(ButtonWrapper, addedProps, 'text'))}
    </FlexWrap>
  );
};


export default Boolean;
