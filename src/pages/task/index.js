import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';
import { parse } from 'query-string';
import t from 'prop-types';


import { update } from '../../redux/modules/answers';
import { completeTask } from '../../redux/actions';
import Loading from '../../views/Loading';
import Task from '../../views/Task';


export const query = graphql`query {
  allTasks: allTasksJson {
    edges {
      node {
        id
        points
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
  points: node.points,
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


const formatForSave = ({ answers, index, value }) => {
  const clonedAnswers = [...answers];
  clonedAnswers[index] = value;
  return clonedAnswers;
};


const createProps = (props, id) => {
  const {
    data,
    allAnswers,
    points,
    changeAnswer,
    submit,
  } = props;

  const task = getIdTasks(data.allTasks, id);

  if (!task) {
    return navigate('/');
  }

  const answers = allAnswers[id] ? allAnswers[id].data : null;

  return {
    id,
    title: task.title,
    points,
    onMenuButtonPress: navigate,
    questions: task.questions,
    answers: !!answers && answers.map(({ value }) => value),
    onQuestionSave: ({ index, value }) => changeAnswer(
      id,
      formatForSave({ answers, index, value }),
    ),
    onTaskSubmit: () => {
      submit(id, task.points);
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
    const { allAnswers } = this.props;

    const answers = (allAnswers && allAnswers[id]) ? allAnswers[id].data : null;

    if (!answers) {
      return navigate('/');
    }

    const total = answers.length;
    const answered = answers.filter(({ value }) => !!value).length;
    const finished = total - answered <= 0;

    if (finished) {
      return navigate('/');
    }

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


Page.propTypes = {
  allAnswers: t.arrayOf(t.shape({
    data: t.arrayOf(t.object),
    completed: t.number,
    started: t.number,
  })),
};


Page.defaultProps = {
  allAnswers: null,
};
