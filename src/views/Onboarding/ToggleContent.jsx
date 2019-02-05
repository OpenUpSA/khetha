import React, { Fragment } from 'react';
import GradientSelect from '../../components/GradientSelect';
import GradientButton from '../../components/GradientButton';
import Prizes from './Prizes';
import Modal from './Modal';


const createOptions = callback => [
  {
    text: 'English',
    callback: () => callback('en'),
  },
];


const ToggleContent = (props) => {
  const {
    language,
    changeLanguage,
    nextStep,
    step,
    complete,
    text,
  } = props;

  const options = createOptions(changeLanguage);

  if (step <= 0 && language !== 'zu') {
    return (
      <GradientSelect
        filled
        placeholder={text.intro.primary}
        {...{ options }}
      />
    );
  }

  return (
    <Fragment>
      {step >= 2 && <Modal {...{ complete, text }} />}
      {step >= 1 && <Prizes {...{ text }} />}
      <GradientButton
        filled
        text={step > 0 ? text.prizes.primary : text.intro.secondary}
        clickAction={nextStep}
      />
    </Fragment>
  );
};


export default ToggleContent;
