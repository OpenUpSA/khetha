import React from 'react';
import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import HelpIcon from '@material-ui/icons/Help';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const FooterBar = styled.div`
  top: auto;
  bottom: 0;
  height: 50px;
  width: 100%;
  position: initial;
  background-color: #73c619;
  color: white;
  @media (min-width: 760px) 
  {
    width: 52%;
    margin: auto
  }
`;

const FooterToolbar = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.li`
  width: 33.33%;
  font-size: 12px;
  :hover, :active {
    background-color: #8fd247;
    border-radius: 0;
  }
`;

const FooterButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const AddButton = styled(Fab)`
  &&{
    background-color: grey;
    background-image: radial-gradient(circle at 50% 50%, #969696, #333);
    border: 5px solid #73c619;
    box-shadow: none;
    width: 30%;
    color: white;
    height: 75px;
    width: 75px;
    top: -30px;
    position: absolute;
  }
  
  :hover, :active {
    border: 5px solid #8fd247;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterBar position="fixed">
      <FooterToolbar>
        <FooterList>
          <FooterItem>
            <FooterButton href="/">
              <ListIcon />
              My stories
            </FooterButton>
          </FooterItem>
          <FooterItem>
            <FooterButton href="/english/folders/index.html">
              <AddButton aria-label="Add Story">
                <AddIcon style={{
                  height: '65px', width: '65px', border: '5px solid white', borderRadius: '50%', padding: '5px',
                }}
                />
              </AddButton>
            </FooterButton>
          </FooterItem>
          <FooterItem>
            <FooterButton href="/about">
              <HelpIcon />
              About
            </FooterButton>
          </FooterItem>
        </FooterList>
      </FooterToolbar>
    </FooterBar>
  </FooterWrapper>
);

export default Footer;
