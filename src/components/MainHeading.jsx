import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  mainHeading {
      grid-column: 2/4;
      grid-row: 1/3;
    }
  h2 {
  color: ${props => props.color || '#000000'};
      position: absolute;
      left: 38.13%;
      right: 6.75%;
      top: 4.57%;
      bottom: 90.63%;

      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      line-height: 32px;
      font-size: 26px;
      text-align: right;

      color: #5f5f5f;

      opacity: 0.8;
      }
`;

const MainHeading = props => {
  const { title, color } = props;
  return <Heading color={color}>{title}</Heading>;
};

export default MainHeading;

