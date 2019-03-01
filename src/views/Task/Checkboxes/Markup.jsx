import React, { Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import t from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { SubmitWrap } from '../styled';
import GradientButton from '../../../components/GradientButton';


const buildControl = (label, value, index, updateValue) => {
  const onChange = () => updateValue(index, value[index]);

  return (
    <Checkbox
      {...{ onChange }}
      value={label}
      checked={!!value[index]}
      color="primary"
    />
  );
};


const buildCheckboxes = options => options.map((label, index) => (
  <FormControlLabel
    key={label}
    {...{ label }}
    control={buildControl(label, index)}
  />
));


const Markup = (props) => {
  const {
    value,
    updateValue,
    next,
    index
  } = props;

  return (
    <Fragment>
      <FormGroup>
        {buildCheckboxes()}
      </FormGroup>
      <SubmitWrap>
        <GradientButton
          filled
          text="Save Answer"
          clickAction={() => next(index, value)}
        />
      </SubmitWrap>
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  value: t.string,
  updateValue: t.func.isRequired,
  next: t.func.isRequired,
  index: t.number.isRequired,
};


Markup.defaultProps = {
  value: null,
};
