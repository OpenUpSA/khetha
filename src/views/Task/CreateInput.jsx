import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GradientButton from '../../components/GradientButton';
import GradientSelect from '../../components/GradientSelect';


const SubmitWrap = styled.div`
  padding-top: 20px;
`;

const FlexWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div`
  padding-right: 30px;
`;


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


const CreateInput = (props) => {
  const {
    type,
    value,
    options,
    focus,
    next,
    index,
  } = props;

  if (type === 'checkboxes') {
    return (
      <FormBinder
        callback={(innerValue, updateValue, updateArray) => {
          const displayValue = innerValue || options.map(() => null);

          return (
            <Fragment>
              <FormGroup>
                {
                  options.map(
                    (label, innerIndex) => (
                      <FormControlLabel
                        key={label}
                        {...{ label }}
                        control={(
                          <Checkbox
                            value={label}
                            checked={!!displayValue[innerIndex]}
                            color="primary"
                            onChange={() => updateArray(
                              innerIndex,
                              displayValue[innerIndex] ? null : label,
                              displayValue,
                            )}
                          />
                        )}
                      />
                    ),
                  )
                }
              </FormGroup>
              <SubmitWrap>
                <GradientButton
                  filled
                  text="Save Answer"
                  clickAction={() => next(index, innerValue)}
                  buttonRef={focus}
                />
              </SubmitWrap>
            </Fragment>
          );
        }}
      />
    );
  }


  if (type === 'string') {
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
  }

  if (type === 'text') {
    return (
      <FormBinder
        callback={(innerValue, updateValue) => (
          <Fragment>
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
          </Fragment>
        )}
      />
    );
  }

  if (type === 'select') {
    return (
      <GradientSelect
        value={value}
        filled
        options={options.map(text => ({
          text,
          callback: () => {
            next(index, text);
          },
        }))}
      />
    );
  }

  if (type === 'boolean') {
    return (
      <FlexWrap>
        <ButtonWrap>
          <GradientButton
            buttonRef={focus}
            text="Yes"
            clickAction={() => {
              next(index, 'Yes');
            }}
            filled
          />
        </ButtonWrap>
        <ButtonWrap>
          <GradientButton
            text="No"
            clickAction={() => {
              next(index, 'No');
            }}
            filled
          />
        </ButtonWrap>
        <ButtonWrap>
          <GradientButton
            text="I don't know"
            clickAction={() => {
              next(index, "I don't know");
            }}
            filled
          />
        </ButtonWrap>
      </FlexWrap>
    );
  }

  if (type === 'gps') {
    return (
      <GradientButton
        text="Calculate Location via GPS"
        clickAction={() => (
          navigator.geolocation.getCurrentPosition(
            ({ coords }) => next(index, `${coords.latitude}, ${coords.longitude}`),
          )
        )}
        filled
      />
    );
  }

  return null;
};


export default CreateInput;


CreateInput.propTypes = {
  type: t.string.isRequired,
  value: t.string,
  options: t.arrayOf(t.string),
  focus: t.shape({
    current: t.node,
  }).isRequired,
  next: t.func.isRequired,
  index: t.number.isRequired,
};

CreateInput.defaultProps = {
  value: null,
  options: null,
};
