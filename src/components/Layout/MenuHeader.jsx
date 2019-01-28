import React from 'react';
import MainHeading from '../MainHeading';
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
`
const Brand = styled.img`
  padding: 24px 16px;
  height: 58.79px;
  right: 80.23%;
`

const Text = styled.div`
  flex-grow: 1
`;


const MenuHeader = props => {

  return (
    <HeaderMenu>
      <Brand>
        <img width={100} height={100} src={logo} />
      </Brand>
      <Text>
        <MainHeading title="Honey Bee Level" />
      </Text>
    </HeaderMenu>
  );
}

export default MenuHeader;




