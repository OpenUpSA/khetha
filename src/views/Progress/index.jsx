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


const Progress = (props) => {
  const {
    onCardPress,
    tasks,
    points,
    onMenuButtonPress,
  } = props;
  return (
    <Layout {...{ points, onMenuButtonPress }}>
      {tasks.map(({
        id,
        title,
        icon,
        progress,
      }) => (
        <Wrapper key={id}>
          <CardWrapper {...{ progress }}>
            <CardActionArea onClick={onCardPress}>
              <CardContentStyled>
                {createTaskInfo(progress, title, icon)}
                {createProgressBar(progress)}
              </CardContentStyled>
            </CardActionArea>
          </CardWrapper>
        </Wrapper>
      ))}
    </Layout>
  );
};

export default Progress;

Progress.propTypes = {
  onCardPress: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      icon: PropTypes.string,
      progress: PropTypes.number,
    }),
  ).isRequired,
};
