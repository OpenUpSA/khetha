import React, { Component, Fragment } from 'react';
import t from 'prop-types';
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
      <Fragment>
        {props.callback(state.value, events.updateValue, events.updateArray)}
      </Fragment>
    );
  }
}


FormBinder.propTypes = {
  forceValue: t.string,
  array: t.arrayOf(t.string),
};


FormBinder.defaultProps = {
  forceValue: null,
  array: null,
};


return (
  <FormBinder
    callback={(innerValue, updateValue) => (
      <Fragment>
        <TextField
          value={innerValue || ''}
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
      </Fragment>
    )}
  />
);
