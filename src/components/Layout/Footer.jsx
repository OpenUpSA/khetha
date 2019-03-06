import React from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const FooterBar = styled.div`
  bottom: 0;
  left: 0;
  height: 75px;
  width: 100%;
  position: initial;
  background: linear-gradient(158.46deg, #00F260 0%, #0575E6 83.33%), #0576E6;
  color: rgba(255, 255, 255, 0.7);
  
  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &:active {
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
  width: 50%;
  font-size: 14px;
  line-height: 16px;
  :hover, :active {
    border-radius: 0;
  }
`;

const FooterButton = styled.span`
  cursor: pointer;
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


const Footer = ({ callback }) => (
  <FooterBar>
    <FooterToolbar>
      <FooterList>
        <FooterItem>
          <FooterButton onClick={() => callback('/progress')}>
            <CheckIcon />
            <span>Progress</span>
          </FooterButton>
        </FooterItem>
        <FooterItem>
          <FooterButton onClick={() => callback('/start')}>
            <AddIcon />
            <span>New Task</span>
          </FooterButton>
        </FooterItem>
        {/* <FooterItem>
          <FooterButton onClick={() => callback('/profile')}>
            <PersonIcon />
            <span>Profile</span>
          </FooterButton>
        </FooterItem>
        <FooterItem>
          <FooterButton onClick={typeof window !== 'undefined' && window.close}>
            <CloseIcon />
            <span>Close App</span>
          </FooterButton>
        </FooterItem> */}
      </FooterList>
    </FooterToolbar>
  </FooterBar>
);


export default Footer;


Footer.propTypes = {
  callback: t.func.isRequired,
};
