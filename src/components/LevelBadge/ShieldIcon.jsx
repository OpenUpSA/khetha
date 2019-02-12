import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';


const ShieldSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
`;


const Number = styled.div`
  font-family: Roboto, sans-serif;
  color: white;
  position: absolute;
  left: ${({ level }) => (level > 99 ? '3px' : '0')};
  bottom: ${({ level }) => (level > 99 ? '10px' : '8px')};
  width: 22.8px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;


const buildNumber = (level) => {
  if (level > 99) {
    return <Icon type="Grade" size="small" color="white" />;
  }

  return level.toString();
};


const ShieldIcon = ({ level }) => (
  <Fragment>
    <ShieldSvg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width="22.8"
      height="35"
      viewBox="1 1 19 25"
    >
      <path
        fill="#777"
        d="M19 4l-8-3h-1L1 4v7c0 8 1 11 9 15a1 1 0 0 0 1 0c8-4 9-7 9-15V4h-1z"
      />
    </ShieldSvg>
    <Number {...{ level }}>
      {buildNumber(level)}
    </Number>
  </Fragment>
);


export default ShieldIcon;


ShieldIcon.propTypes = {
  level: PropTypes.number,
};


ShieldIcon.defaultProps = {
  level: 0,
};
