import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  position: relative;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
  font-weight: bold;
  margin: 0 0 15px 0;
`;

const MainHeading = (props) => {
  const title = props.text;
  return (
    <Heading>
      { title }
    </Heading>
  );
};

export default MainHeading;
