import React, { Fragment } from 'react';
import t from 'prop-types';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


import { ButtonWrap, FlexWrap, NextWrapper } from './styled';
import GradientButton from '../../../components/GradientButton';


const GpsMarkup = (props) => {
  const {
    answer,
    manual,
    activateManual,
    updateAnswer,
    manualSave,
    getLocation,
  } = props;

  if (manual) {
    return (
      <Fragment>
        <Typography>

          We could not automatically detect your location, or you opted to enter your location manually. Please complete the address field below
        </Typography>
        <NextWrapper>
          <TextField
            multiline
            fullWidth
            rows="4"
            value={answer || ''}
            variant="outlined"
            label="Input answer"
            onChange={event => updateAnswer(event.target.value)}
          />
        </NextWrapper>
        <NextWrapper>
          <GradientButton
            primary
            text="Save Answer"
            onButtonPress={manualSave}
          />
        </NextWrapper>
      </Fragment>
    );
  }

  return (
    <FlexWrap>
      <ButtonWrap>
        <GradientButton
          primary
          text="Manually enter address"
          onButtonPress={activateManual}
        />
      </ButtonWrap>
      <ButtonWrap>
        <GradientButton
          primary
          text="Automatically detect with GPS"
          onButtonPress={getLocation}
          resolve="long"
        />
      </ButtonWrap>
    </FlexWrap>
  );
};


export default GpsMarkup;


GpsMarkup.propTypes = {
  // answer: ,
  // manual: ,
  // activateManual: ,
  // updateAnswer: ,
  // manualSave: ,
  // getLocation: ,
};


GpsMarkup.defaultProps = {
};
