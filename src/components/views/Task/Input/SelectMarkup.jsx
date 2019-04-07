import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';


import GradientSelect from '../../../global/GradientSelect';
import { NextWrapper, PromptText } from './styled';
import GradientButton from '../../../global/GradientButton';


const specify = (answer, manualSave, updateAnswer) => (
  <Fragment>
    <PromptText>Please specify:</PromptText>
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


const SelectMarkup = (props) => {
  const {
    answer,
    manual,
    activateManual,
    updateAnswer,
    manualSave,
    options,
    dropDownSave,
    calcIfOther,
  } = props;


  const optionObjects = options.map((text, innerId) => ({ text, id: innerId }));


  const selectCallback = (value) => {
    if (calcIfOther(value)) {
      return activateManual();
    }

    return dropDownSave(value);
  };


  return (
    <div>
      <GradientSelect
        primary={!manual}
        reslove="short"
        selected={answer}
        options={optionObjects}
        onSelectionChange={selectCallback}
      />
      {!!manual && specify(answer, manualSave, updateAnswer)}
    </div>
  );
};


export default SelectMarkup;
