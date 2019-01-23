import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ContainedButton = styled(Link)`
  background: linear-gradient(143.13deg, #00F260 0%, #0575E6 83.33%), #0576E6;
  color: white;
  width: 135px;
  height: 50px;
  border-radius: 2px;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilledButton = (props) => {
  const { text, link } = props;

  return (
    <ContainedButton variant="contained" to={link}>
      { text }
    </ContainedButton>
  );
};

export default FilledButton;
