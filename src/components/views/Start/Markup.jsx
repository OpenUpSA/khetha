import React from 'react';
import t from 'prop-types';
import { PoseGroup } from 'react-pose';


import CardWrapper from './CardWrapper';
import SectionHeading from '../../global/SectionHeading';
import PrizesWidget from '../../global/PrizesWidget';
import addProps from '../../../helpers/functions/addProps';
import Task from './Task';
import createOptions from './createOptions';
import { Section, TasksWrap, CardWrap } from './styled';
import Layout from '../../global/Layout';


const Markup = (props) => {
  const {
    filter,
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
    <Layout {...{ points, onMenuButtonPress }} forceMenu>
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
        {tasks.length > 0 && <SectionHeading gutter text="Start a New Task" />}
        {/* <GradientSelect
          {...{ options }}
          onSelectionChange={changeFilter}
          value={filter}
          placeholder={translation.filter.title}
          prefix={translation.filter.active}
          primary
          fullWidth
        /> */}
        <TasksWrap>
          <PoseGroup>
            {tasks.map(addProps(CardWrapper, { filter, onCardPress }, 'id'))}
          </PoseGroup>
          <CardWrap>
            <Task
              transparent
              title={tasks.length > 0 ? 'Need more tasks?' : 'Well done!'}
              description={tasks.length > 0 ? 'We are continually adding new tasks to this app as the build up to the 2019 election continues.' : 'You’ve completed all current tasks. Check back soon for new tasks and opportunities to earn more points!'}
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
