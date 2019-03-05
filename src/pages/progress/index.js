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


const buildTasks = tasks => tasks.edges.map(({ node }) => {
  const total = node.eng.questions.length;
  const answered = node.eng.questions.filter(item => !!item).length;

  return {
    id: node.id,
    title: node.eng.title,
    icon: node.icon,
    progress: Math.floor(answered / total * 100),
  };
});


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


    const passedProps = {
      points: props.points,
      onMenuButtonPress: navigate,
      onCardPress: id => navigate(`/task?id=${id}`),
      tasks: buildTasks(props.data.tasks),
    };

    return createElement(Progress, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
