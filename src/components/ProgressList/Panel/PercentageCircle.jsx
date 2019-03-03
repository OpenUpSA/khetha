import React from 'react';
import PropTypes from 'prop-types';


import modifyPercentageIfNeeded from './modifyPercentageIfNeeded';
import IconOverlay from './IconOverlay';
import {
  OverlayWrap,
  ProgressBackground,
  FloatingWrap,
  Progress,
} from './styled';


const PercentageCircle = (props) => {
  const {
    percentage,
    incremental,
    index,
    error,
  } = props;

  const iconOverlayProps = {
    percentage,
    incremental,
    index,
    error,
  };

  return (
    <OverlayWrap>
      <ProgressBackground
        variant="static"
        value={100}
        thickness={6}
      />
      <FloatingWrap>
        <Progress
          {...{ percentage }}
          variant="static"
          value={modifyPercentageIfNeeded(percentage, error)}
          thickness={6}
        />
      </FloatingWrap>
      <FloatingWrap>
        <IconOverlay {...iconOverlayProps} />
      </FloatingWrap>
    </OverlayWrap>
  );
};


export default PercentageCircle;


PercentageCircle.propTypes = {
  /** Percentage to display display by this component.
  Decimal numbers will be automically be rounded down
  and numbers higher than 100 will be reduced to 100 */
  percentage: PropTypes.number.isRequired,
};
