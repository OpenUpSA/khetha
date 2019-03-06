import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate, graphql } from 'gatsby';
import t from 'prop-types';


import { update, create } from '../../redux/modules/answers';
import { syncAfterTaskComplete } from '../../redux/actions';
import Loading from '../../views/Loading';
import Task from '../../views/Task';


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
  changeAnswer: (id, answers) => dispatch(update('big-debate', answers)),
  submit: () => dispatch(syncAfterTaskComplete('big-debate', 1)),
  markTaskAsActive: () => dispatch(create('big-debate', 2)),
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

  if (!props.allAnswers || !props.allAnswers['big-debate']) {
    props.markTaskAsActive();
  }

  const calcAnswers = !!props.allAnswers && props.allAnswers['big-debate'] && props.allAnswers['big-debate'].data;

  const answers = calcAnswers || [{}, {}];

  return {
    id: 'big-debate',
    title: task.title,
    points: props.points,
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
      props.submit(id, 1);
      return navigate('/');
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
    const { allAnswers } = this.props;
    const calcAnswers = !!allAnswers && allAnswers['big-debate'] && allAnswers['big-debate'].data;

    const answers = calcAnswers || [{}, {}];
    const total = answers.length;
    const answered = answers.filter(({ value }) => !!value).length;
    const finished = total - answered <= 0;

    if (finished) {
      return navigate('/');
    }

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
