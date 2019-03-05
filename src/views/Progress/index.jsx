import React from 'react';
import PropTypes from 'prop-types';
import { CardActionArea } from '@material-ui/core';

import Layout from '../../components/Layout';
import Icon from '../../components/Icon';

import {
  HeaderProgress,
  Wrapper,
  CardWrapper,
  CardContentStyled,
  TextWrapper,
  ProgressAndTitle,
  ProgressWrapper,
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
      <ProgressWrapper {...{ progress }}>{progress >= 100 ? 'Completed' : 'In progress'}</ProgressWrapper>
      <Title {...{ progress }}>{title}</Title>
    </ProgressAndTitle>
    <Icon type={icon} size="huge" color={progress >= 100 ? 'light-grey' : 'blue'} />
  </TextWrapper>
);


const createTasks = (tasks, onCardPress) => tasks.map((props) => {
  const {
    id,
    title,
    icon,
    progress,
  } = props;

  const CardInner = progress >= 100 ? 'div' : CardActionArea;

  return (
    <Wrapper key={id}>
      <CardWrapper {...{ progress }}>
        <CardInner onClick={progress >= 100 ? onCardPress : null}>
          <CardContentStyled>
            {createTaskInfo(progress, title, icon)}
            {createProgressBar(progress)}
          </CardContentStyled>
        </CardInner>
      </CardWrapper>
    </Wrapper>
  );
});


const Progress = (props) => {
  const {
    onCardPress,
    tasks,
    points,
    onMenuButtonPress,
  } = props;
  return (
    <Layout {...{ points, onMenuButtonPress }}>
      {createTasks(tasks, onCardPress)}
    </Layout>
  );
};

export default Progress;

Progress.propTypes = {
  onCardPress: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  onMenuButtonPress: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      icon: PropTypes.string,
      progress: PropTypes.number,
    }),
  ).isRequired,
};
