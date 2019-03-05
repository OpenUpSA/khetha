import { connect } from 'react-redux';
import t from 'prop-types';
import { createElement, Component } from 'react';
import { navigate } from 'gatsby';


import Loading from '../views/Loading';


const stateToProps = (state, ownProps) => ({
  allAnswers: state.answers,
  id: state.info.id,
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
});


const connectToReduxStore = connect(stateToProps, dispatchToProps);


class Page extends Component {
  componentDidMount() {
    const { id, allAnswers } = this.props;

    if (allAnswers) {
      return navigate('/start/');
    }

    if (id) {
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
  id: t.string,
  allAnswers: t.arrayOf(t.object),
};


Page.defaultProps = {
  id: null,
  allAnswers: null,
};
