import React from 'react';
import { ButtonWrap, FlexWrap } from './styled';
import GradientSelect from '../../../components/GradientSelect';


const Select = (props) => {
  const {
    answer,
    focusElement,
    options,
    id,
    saveAnswer,
    index,
  } = props;

  const optionObjects = options.map((text, innerId) => ({ text, id: innerId }));

  return (
    <GradientSelect
      primary
      filled
      reslove="short"
      selected={answer}
      options={optionObjects}
      onSelectionChange={value => saveAnswer({ type: 'select', value })}
    />
  );
};


export default Select;
