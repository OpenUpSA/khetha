import React, { Fragment } from 'react';
import styled from 'styled-components';
import t from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import SectionHeading from '../../components/SectionHeading';
import GradientSelect from '../../components/GradientSelect';
import PrizesWidget from '../../components/PrizesWidget';
import Task from './Task';
import createOptions from './createOptions';
import calcDifficulty from './calcDifficulty';


const Section = styled.div`
  padding-bottom: 40px;
`;

const TasksWrap = styled.div`
  padding-top: 15px;
`;

const Animate = posed.div();
const CardWrap = styled(Animate)`
  padding: 5px 0;
`;


const createCard = (filter, clickAction, text, options) => (cardProps) => {
  const {
    points,
    title,
    icon,
    description,
    id,
  } = cardProps;


  if (filter === null || filter === calcDifficulty(points)) {
    return (
      <CardWrap key={title}>
        <Task
          {...{
            points,
            title,
            description,
            icon,
            clickAction,
            id,
          }}
        />
      </CardWrap>
    );
  }

  return null;
};


const Markup = (props) => {
  const {
    filter,
    changeFilter,
    tasks,
    translation,
    clickAction,
    rewards,
    points,
  } = props;

  const amounts = [
    tasks.length,
    tasks.filter(task => task.points <= 1).length,
    tasks.filter(task => task.points >= 2 && task.points < 4).length,
    tasks.filter(task => task.points >= 4 && task.points < 8).length,
    tasks.filter(task => task.points >= 8).length,
  ];


  const options = createOptions(changeFilter, translation.view, amounts);


  return (
    <Fragment>
      <Section>
        <SectionHeading gutter text="Next Goal" />
        <PrizesWidget
          {...{ rewards, points }}
          text={translation.rewards}
          filters={{
            dates: 'upcoming',
            completion: 'outstanding',
            index: 0,
          }}
        />
      </Section>

      <Section>
        <SectionHeading gutter text="Start a New Task" />
        <GradientSelect
          {...{ options }}
          value={filter}
          placeholder={translation.view.filter.title}
          prefix={translation.view.filter.active}
          filled
          full
        />
        <TasksWrap>
          <PoseGroup>
            {tasks.map(createCard(filter, clickAction, translation.view, options))}
          </PoseGroup>
          <CardWrap>
            <Task
              id="need-more-tasks"
              transparent
              title={translation.view.more.title}
              description={translation.view.more.description}
            />
          </CardWrap>
        </TasksWrap>
      </Section>
    </Fragment>
  );
};


export default Markup;


Markup.propTypes = {
  changeFilter: t.func.isRequired,
  clickAction: t.func.isRequired,
  points: t.number.isRequired,
  rewards: t.arrayOf(
    t.shape({
      id: t.string,
      points: t.number,
      title: t.string,
      description: t.string,
      dates: t.arrayOf(t.string),
    }),
  ).isRequired,
  filter: t.string,
  translation: t.shape({
    view: t.shape({
      points: t.func,
      filter: t.shape({
        title: t.string,
        active: t.string,
        difficulty: t.arrayOf(t.string),
      }),
      more: t.shape({
        title: t.string,
        description: t.string,
      }),
    }),
  }).isRequired,
  tasks: t.arrayOf(
    t.shape({
      points: t.number.isRequired,
      title: t.string.isRequired,
      description: t.string,
      icon: t.string,
    }),
  ),
};


Markup.defaultProps = {
  filter: null,
  tasks: [],
};
