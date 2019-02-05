import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Icon from '../Icon';


const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const FloatingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Percentage = styled(Typography)`
  && {
    font-size: 10px;
    font-weight: bold;
    color: #0575E6;
  }
`;

const Value = styled(Typography)`
  && {
    font-size: 12px;
    font-weight: bold;
    color: grey;
  }
`;

const Progress = styled(CircularProgress)`
  && {
    color: ${({ percentage }) => (percentage < 100 ? '#0575E6' : '#0575E6')};
  }
`;


const ProgressBackground = styled(CircularProgress)`
  && {
    color: #9e9e9e2e;
  }
`;

const completed = <Icon type="Check" color="blue" />;
const notCompleted = (value, incremental, index = '...') => (
  incremental ? <Percentage>{value}%</Percentage> : <Value>{index}</Value>
);


const PositionIcon = styled(Icon)`
  position: relative;
  bottom: 2px;
`;


const calcContent = (percentage, incremental, index, error) => {
  if (error) {
    return <PositionIcon type="Warning" size="small" color="red" />;
  }

  if (percentage >= 100) {
    return completed;
  }

  return notCompleted(percentage, incremental, index)
};


const PercentageCircle = ({ percentage, incremental, index, error }) => (
  <Wrapper>
    <ProgressBackground
      variant="static"
      value={100}
      thickness={6}
    />
    <FloatingWrap>
      <Progress
        {...{ percentage }}
        variant="static"
        value={percentage > 100 ? 100 : percentage}
        thickness={6}
      />
    </FloatingWrap>
    <FloatingWrap>
      {calcContent(percentage, incremental, index, error)}
    </FloatingWrap>
  </Wrapper>
);


export default PercentageCircle;


PercentageCircle.propTypes = {
  /** Percentage to display display by this component.
  Decimal numbers will be automically be rounded down
  and numbers higher than 100 will be reduced to 100 */
  percentage: PropTypes.number.isRequired,
};
