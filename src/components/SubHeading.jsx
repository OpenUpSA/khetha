import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
  position: relative;
  text-align: center;
  font-size: 17px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #8C8C8C;
  max-width: 295px;
  margin: 0 0 30px 0;
`;

const SubHeading = (props) => {
  const title = props.text;
  return (
    <Heading>
      { title }
    </Heading>
  );
};

export default SubHeading;