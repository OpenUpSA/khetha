import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';
import { parse } from 'query-string';


import { update } from '../../redux/modules/answers';
import { completeTask } from '../../redux/actions';
import Loading from '../../views/Loading';
import Task from '../../views/Task';


export const query = graphql`query {
  allTasks: allTasksJson {
    edges {
      node {
        id
        eng {
          title
          questions {
            title
            description
            format
            options
          }
        }
      }
    }
  }
}`;


const addId = (values, index) => ({ ...values, id: index });


const buildTasks = ({ edges }) => edges.map(({ node }) => ({
  id: node.id,
  title: node.eng.title,
  questions: node.eng.questions.map(addId),
}));


const stateToProps = (state, ownProps) => ({
  points: state.info.points,
  allAnswers: state.answers,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  changeAnswer: (id, answers) => dispatch(update(id, answers)),
  submit: (id, points) => dispatch(completeTask(id, points)),
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


const getIdTasks = (allTasks, id) => buildTasks(allTasks)
  .find(({ id: taskId }) => taskId === id);


const getIdAnswers = (allAnswers, id) => {
  const answersObjects = allAnswers[id];
  // const answersObjects = allAnswers.find(({ id: answersId }) => answersId === id);

  if (!answersObjects) {
    return null;
  }

  return answersObjects.data;
};


const formatForSave = ({ answers, index, value }) => {
  const clonedAnswers = [...answers];
  clonedAnswers[index] = value;
  return clonedAnswers;
};


const createProps = (props, id) => {
  const {
    data,
    allAnswers,
    allTasks,
    points,
    title,
    changeAnswer,
    submit,
  } = props;

  const task = getIdTasks(data.allTasks, id);

  if (!task) {
    return navigate('/');
  }

  const answers = !!allAnswers && getIdAnswers(allAnswers, id);

  return {
    id,
    title: task.title,
    points,
    onMenuButtonPress: navigate,
    questions: task.questions,
    answers: answers && answers.map(item => (item ? item.value : null)),
    onQuestionSave: ({ index, value }) => changeAnswer(id, formatForSave({ answers, index, value })),
    onTaskSubmit: ({ index, value }) => {
      submit(id, points);
      return navigate('/start/');
    },
  };
};


class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = parse(window.location.search);

    return this.setState({
      id,
      loading: false,
    });
  }

  render() {
    const { props, state } = this;

    if (state.loading) {
      return createElement(Loading);
    }

    const passedProps = createProps(props, state.id);
    return createElement(Task, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
