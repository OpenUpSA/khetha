import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markup from './Markup';


export default class State extends Component {
  state = {
    step: 0,
  }

  selectLanguage = (event) => {

    // const { changeLanguagePromise } = this.props;
    // const { value } = event.target;

    // if (value === 'english') {
    //   this.setState({ step: 1 });
    // }

    // return changeLanguagePromise(value)
    //   .then(console.log)
    //   .catch(throwError);
  }

  render() {
    const { state, props, selectLanguage } = this;

    const passedProps = {
      step: state.step,
      language: props.langauge,
      selectLanguage,
    };

    return <Markup {...passedProps} />;
  }
}
