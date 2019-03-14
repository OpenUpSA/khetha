import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';
import t from 'prop-types';


import { update, create } from '../../redux/modules/answers';
import { syncAfterTaskComplete } from '../../redux/actions';
import Loading from '../../views/Loading';
import Task from '../../views/Task';


// FIXME:
const hardcodedQuestionId = 'big-debate';

export const query = graphql`query {
  rawTask: tasksJson(id: { eq: "big-debate" }) {
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
}`;


const addId = (values, index) => ({ ...values, id: index });


const buildTask = rawTask => ({
  id: rawTask.id,
  title: rawTask.eng.title,
  points: rawTask.points,
  questions: rawTask.eng.questions.map(addId),
});


const stateToProps = (state, ownProps) => ({
  points: state.info.points,
  allAnswers: state.answers,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  changeAnswer: (id, answers) => dispatch(update(hardcodedQuestionId, answers)),
  submit: () => dispatch(syncAfterTaskComplete(hardcodedQuestionId, 2)),
  markTaskAsActive: () => dispatch(create(hardcodedQuestionId, 2)),
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


const formatForSave = ({ answers, index, value }) => {
  const clonedAnswers = [...answers];
  clonedAnswers[index] = value;
  return clonedAnswers;
};


const createProps = (props, id) => {
  const task = buildTask(props.data.rawTask);

  if (!task) {
    return navigate('/');
  }

  if (!props.allAnswers || !props.allAnswers[hardcodedQuestionId]) {
    props.markTaskAsActive();
  }

  const calcAnswers = !!props.allAnswers && props.allAnswers[hardcodedQuestionId] && props.allAnswers[hardcodedQuestionId].data;

  const completed = !!props.allAnswers && props.allAnswers[hardcodedQuestionId] && !!props.allAnswers[hardcodedQuestionId].completed;

  const answers = calcAnswers || [{}, {}];

  return {
    autoSubmit: true,
    id: hardcodedQuestionId,
    title: task.title,
    points: props.points,
    submitted: completed,
    onMenuButtonPress: navigate,
    isolated: true,
    logo: true,
    questions: task.questions,
    answers: !!answers && answers.map(({ value }) => value),
    onQuestionSave: ({ index, value }) => props.changeAnswer(
      id,
      formatForSave({ answers, index, value }),
    ),
    onTaskSubmit: () => {
      props.submit(id, 2);
      return navigate('/bigdebatejoin');
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
    return this.setState({
      loading: false,
    });
  }

  render() {
    const { props = {}, state } = this;

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
