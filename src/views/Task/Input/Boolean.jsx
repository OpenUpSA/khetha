import React from 'react';
import t from 'prop-types';


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


Boolean.propTypes = {
  answer: t.string,
  focusElement: t.node.isRequired,
  saveAnswer: t.func,
};


Boolean.defaultProps = {
  answer: null,
  saveAnswer: null,
};


ButtonWrapper.propTypes = {
  text: t.string,
  answer: t.string,
  focusElement: t.node.isRequired,
  saveAnswer: t.func,
  index: t.number.isRequired,
};


ButtonWrapper.defaultProps = {
  text: null,
  answer: null,
  saveAnswer: null,
};
