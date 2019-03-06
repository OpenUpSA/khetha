import React from 'react';
import t from 'prop-types';
import { PoseGroup } from 'react-pose';


import CardWrapper from './CardWrapper';
import SectionHeading from '../../components/SectionHeading';
import GradientSelect from '../../components/GradientSelect';
import PrizesWidget from '../../components/PrizesWidget';
import addProps from '../../helpers/addProps';
import Task from './Task';
import createOptions from './createOptions';
import { Section, TasksWrap, CardWrap } from './styled';
import Layout from '../../components/Layout';


const Markup = (props) => {
  const {
    filter,
    changeFilter,
    tasks,
    translation,
    onCardPress,
    onMenuButtonPress,
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

  const options = createOptions(translation, amounts);

  return (
    <Layout {...{ points, onMenuButtonPress }}>
      <Section>
        <SectionHeading gutter text="Next Goal" />
        <PrizesWidget
          {...{ rewards, points }}
          translation={translation.rewards}
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
          onSelectionChange={changeFilter}
          value={filter}
          placeholder={translation.filter.title}
          prefix={translation.filter.active}
          primary
          fullWidth
        />

        <TasksWrap>
          <PoseGroup>
            {tasks.map(addProps(CardWrapper, { filter, onCardPress }, 'id'))}
          </PoseGroup>
          <CardWrap>
            <Task
              transparent
              title={translation.more.title}
              description={translation.more.description}
            />
          </CardWrap>
        </TasksWrap>
      </Section>
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  changeFilter: t.func.isRequired,
  /** If function is passed it will be called when button is clicked,
   * if string is passed url will be hotloaded via AJAX when button is
   * clicked. However if string links to an external domain a url will
   * be opened in new tab when button is clicked */
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
  /** Language specific text to be used in this view */
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
