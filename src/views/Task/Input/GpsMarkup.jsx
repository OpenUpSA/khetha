import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';


import { provinces, municipalities } from './GpsOptions';
import GradientSelect from '../../../components/GradientSelect';
import { ButtonWrap, FlexWrap, NextWrapper } from './styled';
import GradientButton from '../../../components/GradientButton';


const GpsMarkup = (props) => {
  const {
    answer,
    manual,
    activateManual,
    manualSave,
    getLocation,
    updateAnswer,
  } = props;


  const provinceObjects = provinces.map((text, id) => ({ id, text }));

  const muniObjects = () => municipalities[provinces[answer]].map((text, id) => ({ id, text }));

  const muniSelect = () => (
    <GradientSelect
      options={muniObjects()}
      placeholder="Select a Municipality"
      primary
      resolve="short"
      onSelectionChange={manualSave}
    />
  );

  if (manual) {
    return (
      <Fragment>
        <NextWrapper>
          <GradientSelect
            options={provinceObjects}
            primary={!answer}
            resolve="short"
            selected={answer}
            onSelectionChange={updateAnswer}
          />
        </NextWrapper>
        <NextWrapper>
          {!!answer && muniSelect()}
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
