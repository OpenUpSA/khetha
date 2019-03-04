import React from 'react';
import PropTypes from 'prop-types';
import { CardActionArea } from '@material-ui/core';


import Icon from '../Icon';
import {
  HeaderProgress,
  Wrapper,
  CardWrapper,
  CardContentStyled,
  TextWrapper,
  ProgressAndTitle,
  Progress,
  Title,
} from './styled';


const createProgressBar = progress => (
  <HeaderProgress
    classes={{ barColorPrimary: 'barColor' }}
    variant="determinate"
    value={progress}
    {...{ progress }}
  />
);


const createTaskInfo = (progress, title, icon) => (
  <TextWrapper>
    <ProgressAndTitle>
      <Progress {...{ progress }}>{progress >= 100 ? 'Completed' : 'In progress'}</Progress>
      <Title {...{ progress }}>{title}</Title>
    </ProgressAndTitle>
    <Icon type={icon} size="huge" color={progress >= 100 ? 'light-grey' : 'blue'} />
  </TextWrapper>
);


const ProgressCards = (props) => {
  const {
    title,
    icon,
    progress,
    onCardPress,
  } = props;

  return (
    <Wrapper>
      <CardWrapper {...{ progress }}>
        <CardActionArea onClick={onCardPress}>
          <CardContentStyled>
            {createTaskInfo(progress, title, icon)}
            {createProgressBar(progress)}
          </CardContentStyled>
        </CardActionArea>
      </CardWrapper>
    </Wrapper>
  );
};


export default ProgressCards;


ProgressCards.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onCardPress: PropTypes.func.isRequired,
};
