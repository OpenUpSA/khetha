import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonBorder = styled(Link)`
    width: ${props => props.width || '135px'};
    height: 50px;
    margin-right: 10px;
    font-size: 16px;
    background: ${props => props.background || 'linear-gradient(143.13deg, #00F260 0%, #0575E6 83.33%), #0576E6'};
    border-radius: 2px;
    box-sizing: border-box;
    color: #01C98B;
    display: block;
    padding: 1px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 2;
  `;

const ButtonText = styled.span`
  align-items: center;
  background: #fafafa;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background .5s ease;
  width: 100%;
  `;

const OutlinedButton = (props) => {
  const {
    text,
    link,
    background,
    width,
  } = props;

  return (
    <ButtonBorder to={link} background={background} width={width}>
      <ButtonText>{text}</ButtonText>
    </ButtonBorder>
  );
};

export default OutlinedButton;
