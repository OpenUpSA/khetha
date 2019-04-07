import { connect } from 'react-redux';
import t from 'prop-types';
import { createElement, Component } from 'react';
import { navigate } from 'gatsby';


import Loading from '../views/Loading';


const stateToProps = (state, ownProps) => ({
  allAnswers: state.answers,
  onboarded: state.info.onboarded,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


class Page extends Component {
  componentDidMount() {
    const { onboarded, allAnswers } = this.props;

    if (onboarded && allAnswers) {
      return navigate('/start/');
    }

    return navigate('/intro/');
  }

  render() {
    return createElement(Loading);
  }
}


const PageWithRedux = connectToReduxStore(Page);


export default PageWithRedux;


Page.propTypes = {
  onboarded: t.bool,
  allAnswers: t.arrayOf(t.object),
};


Page.defaultProps = {
  onboarded: null,
  allAnswers: null,
};
