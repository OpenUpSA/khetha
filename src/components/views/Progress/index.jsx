import React from 'react';
import PropTypes from 'prop-types';
import { CardActionArea } from '@material-ui/core';


import SectionHeading from '../../global/SectionHeading';
import Layout from '../../global/Layout';
import Icon from '../../global/Icon';


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


const createProgressBar = (completed, progress) => (
  <HeaderProgress
    classes={{ barColorPrimary: 'barColor' }}
    variant="determinate"
    value={progress}
    {...{ completed }}
  />
);


const createTaskInfo = (completed, title, icon) => (
  <TextWrapper>
    <ProgressAndTitle>
      <ProgressWrapper {...{ completed }}>{completed ? 'Submitted' : 'In progress'}</ProgressWrapper>
      <Title {...{ completed }}>{title}</Title>
    </ProgressAndTitle>
    <Icon type={icon} size="huge" color={completed ? 'light-grey' : 'blue'} />
  </TextWrapper>
);


const createTasks = (tasks, onCardPress) => tasks.map((props) => {
  const {
    id,
    title,
    icon,
    progress,
    completed,
  } = props;

  const CardInner = completed ? 'div' : CardActionArea;

  return (
    <Wrapper key={id}>
      <CardWrapper {...{ completed }}>
        <CardInner onClick={completed ? null : () => onCardPress(id)}>
          <CardContentStyled>
            {createTaskInfo(completed, title, icon)}
            {createProgressBar(completed, progress)}
          </CardContentStyled>
        </CardInner>
      </CardWrapper>
    </Wrapper>
  );
});


const Progress = (props) => {
  const {
    onCardPress,
    active,
    completed,
    points,
    onMenuButtonPress,
  } = props;

  console.log(completed);

  return (
    <Layout {...{ points, onMenuButtonPress }} forceMenu>
      {!!active.length > 0 && <SectionHeading gutter text="Active Tasks" />}
      {!!active.length > 0 && createTasks(active, onCardPress)}
      {!!completed.length > 0 && <SectionHeading gutter text="Completed Tasks" />}
      {!!completed.length > 0 && createTasks(completed, onCardPress)}
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
