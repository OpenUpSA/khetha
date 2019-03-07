import React, { Component } from 'react';
import t from 'prop-types';


import GpsMarkup from './GpsMarkup';


class Gps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manual: false,
      answer: null,
    };
  }

  activateManual = () => this.setState({ manual: true });

  updateAnswer = answer => this.setState({ answer });

  manualSave = () => {
    const { saveAnswer } = this.props;
    const { answer } = this.state;

    return saveAnswer({ type: 'gps', value: answer, manual: true });
  }

  getLocation = () => {
    const { saveAnswer } = this.props;

    return window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => saveAnswer(
        { type: 'gps', value: `${coords.latitude} ${coords.longitude}`, manual: false },
      ),
      this.activateManual,
      {
        timeout: 5000,
      },
    );
  }

  render() {
    const {
      props,
      state,
      values,
      ...events
    } = this;

    const passedProps = {
      answer: state.answer,
      manual: state.manual,
      activateManual: events.activateManual,
      getLocation: events.getLocation,
      updateAnswer: events.updateAnswer,
      manualSave: events.manualSave,
    };

    return <GpsMarkup {...passedProps} />;
  }
}


export default Gps;


Gps.propTypes = {
  saveAnswer: t.func,
};


Gps.defaultProps = {
  saveAnswer: null,
};
