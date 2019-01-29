import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/es/IconButton/IconButton';

import FaceIcon from '@material-ui/icons/Face';
import CityIcon from '@material-ui/icons/LocationCity';
import ThumbIcon from '@material-ui/icons/ThumbUp';

const CardWrapper = styled.ul`
  @media (min-width: 760px) {
    width: 50%;
    margin: auto;
  }
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    color: #0575e6;
    background-color: #ffffff;
  }
`;

const StyledHeader = styled(({ headline, subtitle, ...other }) => (
  <CardHeader
    classes={{ title: 'headline', subheader: 'subtitle' }}
    {...other}
  />
))`
  && {
    padding: 10px 16px 0px;
  }
  & .headline {
    color: ${props => props.color || '#0575E6'};
    font-size: 12px;
    line-height: 2px;
  }

  & .subtitle {
    color: ${props => props.color || 'rgba(0, 0, 0, 0.87)'};
    font-size: 18px;
    line-height: 2px;
    font-weight: bold;
  }
`;

const CardText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-size: 6px;
  line-height: 2px;
`;

const StartCards = () => (
  <CardWrapper>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              <IconButton>
                <FaceIcon color="primary" fontSize="large" />
              </IconButton>
            }
            title="12 Kheta Points"
            subheader="Introductory Questions"
          />
          <CardContent>
            <CardText>
              Tell us a bit about yourself, we are interested in your age,
              gender and preferences. This will help us get a better idea of who
              is filling in the questions.
            </CardText>
          </CardContent>
        </TopicCard>
      </CardLink>
    </CardItem>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              <IconButton>
                <CityIcon color="primary" fontSize="large" />
              </IconButton>
            }
            title="32 Kheta Points"
            subheader="Survey Your Community"
          />
          <CardContent>
            <CardText>
              It is important to know what those around you think about the
              upcoming 2019 election. In this challenge you will need to speak
              to them.
            </CardText>
          </CardContent>
        </TopicCard>
      </CardLink>
    </CardItem>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              <IconButton>
                <ThumbIcon color="primary" fontSize="large" />
              </IconButton>
            }
            title="8 Kheta Points"
            subheader="Voting Preferences"
          />
          <CardContent>
            <CardText>
              Tell us a bit about whether you will be voting in the 2019
              election, and if so what are the choice that determine who you
              vote for.
            </CardText>
          </CardContent>
        </TopicCard>
      </CardLink>
    </CardItem>
  </CardWrapper>
);

export default StartCards;
