/* eslint-disable prefer-const */


import React, { Fragment } from 'react';
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
    <div>
      <FormControlLabel
        label={text}
        {...{ control }}
      />
    </div>
  );
};


const Checkboxes = (props) => {
  const {
    answer,
    focusElement,
    options,
    id,
    updateAnswer,
    saveAnswer,
    index,
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
