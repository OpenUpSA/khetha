import React, { Component } from 'react';
import t from 'prop-types';
import Markup from './Markup';


export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    const { step: startingStep, language: startingLanguage } = this.props;

    this.state = {
      step: startingStep,
      language: startingLanguage,
    };
  }

  changeLanguage = (language) => {
    const { nextStep } = this;
    this.setState({ language });

    if (language === 'en') {
      return nextStep();
    }

    return null;
  };

  nextStep = () => {
    const { step } = this.state;

    if (step <= 3) {
      return this.setState({ step: step + 1 });
    }

    return null;
  }

  render() {
    const { state, props, ...events } = this;

    const passedProps = {
      step: state.step,
      language: state.language,
      changeLanguage: events.changeLanguage,
      nextStep: events.nextStep,
      complete: props.complete,
      translation: props.translation,
    };

    return <Markup {...passedProps} />;
  }
}


Onboarding.propTypes = {
  /** The current language that the user has selected, usually starts as `null` */
  language: t.oneOf(['en', 'zu']),
  /** Accepts a callback that get triggered whenever language
   * is selected in initial language dropdown. The language iso-key
   * is passed as the first parameter */
  selectLanguage: t.func,
  /** The step to start at when the onboarding view loads */
  step: t.oneOf([0, 1, 2]),
  /** Value that gets passed as `clickAction` prop to button that completes
   * onboarding process. Ideally should take user to 'start' view. */
  complete: t.oneOfType([
    t.string,
    t.func,
  ]).isRequired,
  /** Component that should be used to create link that completes onboarding.
   * Expected to be from `import { Link } from 'gatsby'`.
  */
  link: t.func,
  /** Language specific text to be used in this view */
  translation: t.shape({
    intro: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
    }),
    prizes: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
      list: t.arrayOf(t.shape({
        title: t.string,
        description: t.string,
      })),
    }),
    alert: t.shape({
      title: t.string,
      description: t.string,
      primary: t.string,
    }),
  }).isRequired,
};


Onboarding.defaultProps = {
  language: null,
  selectLanguage: null,
  step: 0,
  link: null,
};
