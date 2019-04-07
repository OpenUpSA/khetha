import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import { NextWrapper } from './styled';
import GradientButton from '../../../global/GradientButton';

const Date = (props) => {
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
        inputProps={{
          type: 'date',
        }}
        onChange={event => updateAnswer(event.target.value)}
      />
      <NextWrapper>
        <GradientButton
          primary
          text="Save Answer"
          reslove="short"
          onButtonPress={value => saveAnswer({ type: 'date', value })}
        />
      </NextWrapper>
    </Fragment>
  );
};


export default Date;
