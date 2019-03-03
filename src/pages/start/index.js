import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';
import { difference } from 'lodash';


import { create } from '../../redux/modules/answers';
import Loading from '../../views/Loading';
import { requestNotificationAccess } from '../../redux/actions';
import Start from '../../views/Start';


export const query = graphql`query {
  tasks: allTasksJson {
    edges {
      node {
        id
        icon
        points
        eng {
          title
          description
          questions {
            title
          }
        }
      }
    }
  }
  rewards: allRewardsJson {
    edges {
      node {
        id
        title
        description
        dates
        points
      }
    }
  }
}`;


const buildRewards = rewards => rewards.edges.map(({ node }) => ({
  id: node.id,
  points: node.points,
  title: node.title,
  description: node.description,
  dates: node.dates,
}));


const buildTasks = tasks => tasks.edges.map(({ node }) => ({
  id: node.id,
  points: node.points,
  title: node.eng.title,
  description: node.eng.description,
  icon: node.icon,
  amountOfQuestions: node.eng.questions.length,
}));


const stateToProps = (state, ownProps) => ({
  points: state.info.points,
  activeTasks: state.answers ?
    Object.keys(state.answers).filter(key => !!state.answers[key].completed)
    : [],
  // activeTasks: state.answers ? Object.keys(state.answers) : [],
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  startTask: (id, amount) => dispatch(create(id, amount)),
  onMount: () => dispatch(requestNotificationAccess()),
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


const createProps = (props) => {
  const {
    tasks,
    rewards,
    points,
    onMount,
    activeTasks,
    startTask,
  } = props;

  const validTasks = difference(tasks.map(({ id }) => id), activeTasks);

  return {
    rewards,
    tasks: validTasks.map(id => tasks.find(({ id: taskId }) => id === taskId)),
    points,
    onMenuButtonPress: navigate,
    onMount,
    onCardPress: ({ amountOfQuestions, id }) => {
      startTask(id, amountOfQuestions);
      return navigate(`/task/index.html?id=${id}`);
    },
    translation: {
      points: 'Khetha Points',
      filter: {
        title: 'Filter tasks',
        active: 'Filtered by',
        difficulty: ['Show all', 'Easy', 'Medium', 'Hard', 'Very Hard'],
      },
      more: {
        title: 'Need more tasks?',
        description: 'We are continually adding new tasks to this app as the build up to the 2019 election continues.',
      },
      rewards: {
        qualify: ({ nextDraw }) => `You qualify for the next draw in ${nextDraw}!`,
        noQualify: ({ nextDraw, remaining }) => `${remaining} more points needed to qualify for the upcoming draw in ${nextDraw}`,
      },
    },
  };
};


class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    return this.setState({ loading: false });
  }

  render() {
    const { props, state } = this;

    if (state.loading) {
      return createElement(Loading);
    }

    const passedProps = createProps({
      startTask: props.startTask,
      activeTasks: props.activeTasks,
      points: props.points,
      rewards: buildRewards(props.data.rewards),
      tasks: buildTasks(props.data.tasks),
      onMount: props.onMount,
    });

    return createElement(Start, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
