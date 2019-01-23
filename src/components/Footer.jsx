import React from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';

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
  height: 75px;
  width: 100%;
  position: initial;
  background: linear-gradient(158.46deg, #00F260 0%, #0575E6 83.33%), #0576E6;
  color: rgba(255, 255, 255, 0.7);
  @media (min-width: 760px) 
  {
    width: 52%;
    margin: auto
  }
  :hover, :active {
    color: rgba(255, 255, 255, 1);
  }
`;

const FooterToolbar = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
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
  font-size: 14px;
  line-height: 16px;
  :hover, :active {
    border-radius: 0;
  }
`;

const FooterButton = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  text-align: center;
  :hover, :active {
    color: rgba(255, 255, 255, 1);
    border-radius: 0;
    border-bottom: 2px solid #FF005C;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterBar position="fixed">
      <FooterToolbar>
        <FooterList>
          <FooterItem>
            <FooterButton href="/progress">
              <CheckIcon />
              Progress
            </FooterButton>
          </FooterItem>
          <FooterItem>
            <FooterButton href="/start">
              <AddIcon />
              Start
            </FooterButton>
          </FooterItem>
          <FooterItem>
            <FooterButton href="/">
              <PersonIcon />
              Profile
            </FooterButton>
          </FooterItem>
        </FooterList>
      </FooterToolbar>
    </FooterBar>
  </FooterWrapper>
);

export default Footer;
