import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';


import Loading from '../../views/Loading';
import Progress from '../../views/Progress';


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
}`;


const buildTask = (allAnswers, allTasks) => (key) => {
  const answersArray = allAnswers[key].data;
  const taskObject = allTasks.find(({ node }) => node.id === key);

  if (!taskObject) {
    return null;
  }

  const total = answersArray.length;
  const validAnswers = answersArray.filter(({ value }) => !!value).length;

  return {
    id: taskObject.node.id,
    title: taskObject.node.eng.title,
    icon: taskObject.node.icon,
    progress: Math.floor(validAnswers / total * 100),
    completed: !!allAnswers[key].completed,
  };
};


const stateToProps = (state, ownProps) => ({
  points: state.info.points,
  taskAnswers: state.answers,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


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

    const allAnswerKeys = props.taskAnswers ? Object.keys(props.taskAnswers) : null;
    const rawTasks = allAnswerKeys && allAnswerKeys.map(
      buildTask(
        props.taskAnswers,
        props.data.tasks.edges,
      ),
    ).filter(value => !!value);

    const tasks = rawTasks || [];

    const passedProps = {
      points: props.points,
      onMenuButtonPress: navigate,
      onCardPress: id => navigate(`/task?id=${id}`),
      active: tasks.filter(({ completed }) => !completed) || [],
      completed: tasks.filter(({ completed }) => !!completed) || [],
    };

    return createElement(Progress, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
