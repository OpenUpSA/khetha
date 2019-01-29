import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Step0 from './Step0';
import Step1 from './Step1';
import Shell from './Shell';


const parseOnboardingLevel = (level) => {
  const stringStep = level.toString();

  switch (stringStep) {
    case '0': return { step: 0, alert: false };
    case '1': return { step: 1, alert: false };
    case '2': return { step: 1, alert: true };
    default: return { step: 0, alert: true };
  }
};


const steps = [
  Step0,
  Step1,
];


export default class State extends Component {
  progressOnboarding = () => {
    const {
      onboardingLevel,
      changeOnboarding,
      language,
    } = this.props;

    if (onboardingLevel >= 2) {
      navigate(`/${language}/start/`);
    }

    return changeOnboarding(onboardingLevel + 1);
  }

  selectLanguage = (event) => {
    const { value } = event.target;
    const { progressOnboarding } = this;
    const { changeLanguage } = this.props;

    changeLanguage(value);
    if (value === 'en') {
      return progressOnboarding();
    }

    return navigate(`/${value}/`);
  }

  render() {
    const {
      props,
      ...events
    } = this;

    const { step, alert } = parseOnboardingLevel(props.onboardingLevel);

    const passedProps = {
      language: props.language,
      selectLanguage: events.selectLanguage,
      translation: props.translation,
      progressOnboarding: events.progressOnboarding,
      alert,
    };

    const Markup = steps[step] || Shell;
    return <Markup {...passedProps} />;
  }
}


State.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  onboardingLevel: PropTypes.number.isRequired,
  changeOnboarding: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
