import React from 'react';
import { ButtonWrap, FlexWrap } from './styled';
import GradientButton from '../../components/GradientButton';


const values = ['Yes', 'No', "Don't know"];


const buildButtons = (next, index) => (value) => {
  const nextWrapper = () => next(index, value);

  return (
    <ButtonWrap>
      <GradientButton
        text="Yes"
        clickAction={nextWrapper}
        filled
      />
    </ButtonWrap>
  );
};


const Boolean = () => (
  <FlexWrap>
    {buildButtons(values)}
  </FlexWrap>
);


export default Boolean;
