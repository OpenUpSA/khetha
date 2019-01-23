import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ContainedButton = styled(Link)`
  background: ${props => props.background || 'linear-gradient(143.13deg, #00F260 0%, #0575E6 83.33%), #0576E6'};
  color: white;
  width: ${props => props.width || '135px'};
  height: 50px;
  border-radius: 2px;
  font-size: 16px;
  text-decoration: none;
  text-transform: ${props => props.font || 'uppercase'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
  padding: 0 15px;
  margin-bottom: 10px;
`;

const FilledButton = (props) => {
  const {
    text,
    link,
    background,
    width,
    font,
    justify,
  } = props;

  return (
    <ContainedButton variant="contained" to={link} background={background} width={width} font={font} justify={justify}>
      { text }
    </ContainedButton>
  );
};

export default FilledButton;
