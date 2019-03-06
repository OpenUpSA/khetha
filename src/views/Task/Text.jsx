import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import GradientButton from '../../components/GradientButton';
import { SubmitWrap } from './styled';

class FormBinder extends Component {
  constructor(props) {
    super(props);
    const { forceValue, array } = this.props;
    const realValue = array ? forceValue.split(', ') : forceValue;

    this.state = {
      value: realValue || null,
    };
  }

  updateArray = (index, newValue, array) => {
    const temp = array;
    temp[index] = newValue;

    this.setState({
      value: temp,
    });
  }

  updateValue = value => this.setState({ value });

  render() {
    const { props, state, ...events } = this;

    return (
      <React.Fragment>
        {props.callback(state.value, events.updateValue, events.updateArray)}
      </React.Fragment>
    );
  }
}

return (
  <FormBinder
    callback={(innerValue, updateValue) => (
      <React.Fragment>
        <TextField
          value={innerValue || ''}
          multiline
          rows="4"
          variant="outlined"
          label="Input answer"
          onChange={event => updateValue(event.target.value)}
        />

        <SubmitWrap>
          <GradientButton
            buttonRef={focus}
            filled
            text="Save Answer"
            clickAction={() => next(index, innerValue)}
          />
        </SubmitWrap>
      </React.Fragment>
    )}
  />
);
