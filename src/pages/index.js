import { connect } from 'react-redux';
import { createElement, Component } from 'react';
import { navigate } from 'gatsby';


import Loading from '../views/Loading';


const stateToProps = (state, ownProps) => ({
  allAnswers: state.answers,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


class Page extends Component {
  componentDidMount() {
    const { allAnswers } = this.props;

    // if (allAnswers) {
    //   return navigate('/progress/');
    // }

    return navigate('/start/');
  }

  render() {
    return createElement(Loading);
  }
}


const PageWithRedux = connectToReduxStore(Page);


export default PageWithRedux;
