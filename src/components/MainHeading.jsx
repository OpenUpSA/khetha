import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  color: ${props => props.color || '#000000'};
  position: relative;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
  font-weight: bold;
  margin: 0 0 15px 0;
`;

const MainHeading = (props) => {
  const { title, color } = props;
  return (
    <Heading color={color}>
      { title }
    </Heading>
  );
};

export default MainHeading;
