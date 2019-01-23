import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/es/IconButton/IconButton';

import FaceIcon from '@material-ui/icons/Face';


const CardWrapper = styled.ul`
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
`;

const CardItem = styled.li`
   list-style-type: none;
   width: 100%;
   margin-bottom: 10px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const TopicCard = styled(Card)`
  && {
    color: #0575E6;
    background-color: #FFFFFF;
    height: 100px;
  }
`;

const StyledHeader = styled(({ headline, subtitle, ...other }) => (
  <CardHeader classes={{ title: 'headline', subheader: 'subtitle' }} {...other} />
))`
  && {
    padding: 10px 16px 20px;
  }
  & .headline {
    color: #0575E6;
    font-size: 12px;
    line-height: 20px;
  }
  
  & .subtitle {
    color: rgba(0, 0, 0, 0.87);
    font-size: 18px;
    line-height: 20px;
  }
`;

const HeaderProgress = styled(({ barColorPrimary, ...other }) => (
  <LinearProgress classes={{ barColorPrimary: 'barColor' }} {...other} />
))`
  && {
    background: #f5f5f5;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    margin: 0 16px;
    height: 4px;
  }
  
  & .barColor {
    background: ${props => props.barColorPrimary};
  }
`;

const Cards = () => (
  <CardWrapper>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={(
              <IconButton>
                <FaceIcon color="primary" fontSize="large" />
              </IconButton>
            )}
            title="11 Points Remaining"
            subheader="Introductory Questions"
          />
          <HeaderProgress variant="determinate" value={55} barColorPrimary="linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;" />
        </TopicCard>
      </CardLink>
    </CardItem>
  </CardWrapper>
);

export default Cards;
