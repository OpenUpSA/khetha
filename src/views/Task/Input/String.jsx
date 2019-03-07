import React, { Fragment } from 'react';
import t from 'prop-types';
import TextField from '@material-ui/core/TextField';


import { NextWrapper } from './styled';
import GradientButton from '../../../components/GradientButton';


const String = (props) => {
  const {
    answer,
    saveAnswer,
    updateAnswer,
  } = props;

  return (
    <Fragment>
      <TextField
        fullWidth
        value={answer || ''}
        variant="outlined"
        label="Input answer"
        onChange={event => updateAnswer(event.target.value)}
      />
      <NextWrapper>
        <GradientButton
          primary
          text="Save Answer"
          reslove="short"
          onButtonPress={value => saveAnswer({ type: 'string', value })}
        />
      </NextWrapper>
    </Fragment>
  );
};


export default String;

String.propTypes = {
  answer: t.string,
  saveAnswer: t.func,
  updateAnswer: t.func.isRequired,
};


String.defaultProps = {
  answer: null,
  saveAnswer: null,
};
