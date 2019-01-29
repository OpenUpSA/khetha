import React, { Fragment } from 'react';
import styled from 'styled-components';
import schema from './schema';


const ShieldSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
`;


const Number = styled.div`
  color: white;
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 22.8px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;


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
    <Number>{level}</Number>
  </Fragment>
);


export default ShieldIcon;


ShieldIcon.propTypes = schema.propTypes;
ShieldIcon.defaultProps = schema.defaultProps;
