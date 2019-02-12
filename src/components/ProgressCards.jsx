import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/es/IconButton/IconButton';

import FaceIcon from '@material-ui/icons/Face';
import CityIcon from '@material-ui/icons/LocationCity';
import ThumbIcon from '@material-ui/icons/ThumbUp';
// import PropTypes from 'prop-types';

const CardWrapper = styled.ul`
  @media (min-width: 760px) {
    width: 60%;
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

const CardLink = styled.a`
  text-decoration: none;
`;

const TopicCard = styled(Card)`
  && {
    color: #0575e6;
    background-color: ${props => props.background || '#FFFFFF'};
    height: 100px;
    box-shadow: ${props => props.boxShadow || ''};
    border: ${props => `1px solid ${props.border}` || ''};
  }
`;

const StyledHeader = styled(({ headline, subtitle, ...other }) => (
  <CardHeader
    classes={{ title: 'headline', subheader: 'subtitle' }}
    {...other}
  />
))`
  && {
    padding: 10px 16px 20px;
  }
  & .headline {
    color: ${props => props.color || '#0575E6'};
    font-size: 12px;
    line-height: 20px;
  }

  & .subtitle {
    color: ${props => props.color || 'rgba(0, 0, 0, 0.87)'};
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
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

const tasks = [
  {
    total: 100,
    link: '/',
    icon: 'faceIcon',
    title: '11 Points Remaining',
    subheader: 'Introductory Questions',
    color: '',
    variant: 'determinate',
    value: 68,
    barColorPrimary: 'linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;',
  },
  {
    total: 100,
    link: '/',
    icon: 'cityIcon',
    title: '31 Points Remaining',
    subheader: 'Survey Your Community',
    color: '',
    variant: 'determinate',
    value: 68,
    barColorPrimary: 'linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;',
  },
  {
    total: 100,
    link: '/',
    icon: 'cityIcon',
    title: '31 Points Remaining',
    subheader: 'Survey Your Community',
    color: '#AFAFAF',
    variant: 'determinate',
    value: 100,
    barColorPrimary: '#AFAFAF',
  },
  {
    total: 100,
    link: '/',
    icon: 'thumbIcon',
    title: '11 Points Remaining',
    subheader: 'Introductory Questions',
    color: '',
    variant: 'determinate',
    value: 0,
    barColorPrimary: 'linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;',
  },
];

const iconChange = (iconItems) => {
  switch (iconItems) {
    case 'faceIcon': return <FaceIcon color="primary" fontSize="large" />;
    case 'cityIcon': return <CityIcon color="primary" fontSize="large" />;
    case 'thumbIcon': return <ThumbIcon color="primary" fontSize="large" />;
    default: return <FaceIcon color="primary" fontSize="large" />;
  }
};

const ProgressCards = () => (
  <CardWrapper>
    {tasks.map(task => (
      <CardItem>
        <CardLink to={task.link}>
          <TopicCard>
            <StyledHeader
              action={
                (
                  <IconButton>
                    {iconChange(task.icon)}
                  </IconButton>
                )
              }
              title={task.title}
              subheader={task.subheader}
              color={task.color}
            />
            <HeaderProgress
              variant={task.variant}
              value={task.value}
              barColorPrimary={task.barColorPrimary}
            />
          </TopicCard>
        </CardLink>
      </CardItem>
    ))}

    {/* <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              (
                <IconButton>
                  <FaceIcon color="primary" fontSize="large" />
                </IconButton>
              )
            }
            title="11 Points Remaining"
            subheader="Introductory Questions"
          />
          <HeaderProgress
            variant="determinate"
            value={68}
            barColorPrimary="linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;"
          />
        </TopicCard>
      </CardLink>
    </CardItem>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              (
                <IconButton>
                  <CityIcon color="primary" fontSize="large" />
                </IconButton>
              )
            }
            title="31 Points Remaining"
            subheader="Survey Your Community"
          />
          <HeaderProgress
            variant="determinate"
            value={25}
            barColorPrimary="linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;"
          />
        </TopicCard>
      </CardLink>
    </CardItem>
    <CardItem>
      <CardLink to="/">
        <TopicCard background="transparent" boxShadow="none" border="#AFAFAF">
          <StyledHeader
            action={
              (
                <IconButton>
                  <ThumbIcon fontSize="large" />
                </IconButton>
              )
            }
            title="Completed!"
            subheader="Voting Preferences"
            color="#AFAFAF"
          />
          <HeaderProgress
            variant="determinate"
            value={100}
            barColorPrimary="#AFAFAF"
          />
        </TopicCard>
      </CardLink>
    </CardItem>
    <CardItem>
      <CardLink to="/">
        <TopicCard>
          <StyledHeader
            action={
              (
                <IconButton>
                  <CityIcon color="primary" fontSize="large" />
                </IconButton>
              )
            }
            title="31 Points Remaining"
            subheader="Survey Your Community"
          />
          <HeaderProgress
            variant="determinate"
            value={0}
            barColorPrimary="linear-gradient(177.9deg, #00F260 0%, #0575E6 83.33%), #0576E6;"
          />
        </TopicCard>
      </CardLink>
    </CardItem> */}
  </CardWrapper>
);

// ProgressCards.propTypes = {
//   linkUrl: PropTypes.string.isRequired,
// };

export default ProgressCards;
