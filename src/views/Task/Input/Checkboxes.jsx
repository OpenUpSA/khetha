/* eslint-disable prefer-const */


import React, { Fragment } from 'react';
import t from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import GradientButton from '../../../components/GradientButton';
import { StyledCheckbox, NextWrapper } from './styled';
import { blankArray } from '../../../helpers/randomizer';
import addProps from '../../../helpers/addProps';


const ButtonWrapper = (props) => {
  const {
    text,
    answerArray,
    updateAnswer,
    options,
    index,
    ...otherProps
  } = props;

  const passedProps = {
    ...otherProps,
    text,
  };

  const toggleAnswer = () => {
    let clonedArray = [...answerArray];
    clonedArray[index] = !clonedArray[index];
    return updateAnswer(clonedArray);
  };

  const control = (
    <StyledCheckbox
      classes={{ colorSecondary: 'icon' }}
      {...passedProps}
      checked={!!answerArray[index]}
      onClick={toggleAnswer}
    />
  );

  return (
    <FormControlLabel
      label={text}
      {...{ control }}
    />
  );
};


const Checkboxes = (props) => {
  const {
    answer,
    focusElement,
    options,
    updateAnswer,
    saveAnswer,
  } = props;

  const optionObjects = options.map(text => ({ text }));
  const answerArray = answer || blankArray(options.length, false);

  const addedProps = {
    saveAnswer,
    focusElement,
    answerArray,
    updateAnswer,
  };

  return (
    <Fragment>
      {optionObjects.map(addProps(ButtonWrapper, addedProps, 'text'))}
      <NextWrapper>
        <GradientButton
          primary
          text="Save Answer"
          resolve="short"
          onButtonPress={() => saveAnswer({ type: 'boolean' })}
        />
      </NextWrapper>
    </Fragment>
  );
};


export default Checkboxes;


Checkboxes.propTypes = {
  answer: t.string,
  saveAnswer: t.func,
  options: t.arrayOf(t.string),
  focusElement: t.node.isRequired,
  updateAnswer: t.func.isRequired,
};


Checkboxes.defaultProps = {
  answer: null,
  saveAnswer: null,
  options: null,
};


ButtonWrapper.propTypes = {
  text: t.string,
  answerArray: t.arrayOf(t.string),
  updateAnswer: t.func.isRequired,
  options: t.arrayOf(t.string),
  index: t.number.isRequired,
};


ButtonWrapper.defaultProps = {
  text: null,
  options: null,
  answerArray: [],
};
