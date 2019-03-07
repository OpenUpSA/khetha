import React from 'react';
import t from 'prop-types';


import { ButtonWrap, FlexWrap } from './styled';
import GradientButton from '../../../components/GradientButton';
import addProps from '../../../helpers/addProps';


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

Buttons.propTypes = {
  answer: t.string,
  saveAnswer: t.func,
  options: t.arrayOf(t.string),
};


Buttons.defaultProps = {
  answer: null,
  saveAnswer: null,
  options: null,
};


ButtonWrapper.propTypes = {
  text: t.string,
  answer: t.string,
  focusElement: t.node.isRequired,
  saveAnswer: t.func,
  options: t.arrayOf(t.string),
};


ButtonWrapper.defaultProps = {
  text: null,
  answer: null,
  saveAnswer: null,
  options: null,
};
