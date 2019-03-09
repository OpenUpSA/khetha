import { createElement, Component } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';


import { completeOnboarding } from '../../redux/modules/info';
import BigDebateJoin from '../../views/BigDebateJoin';
import Loading from '../../views/Loading';


const stateToProps = (state, ownProps) => ({
  ...ownProps,
});


const dispatchToProps = (dispatch, ownProps) => ({
  logOnboarded: () => dispatch(completeOnboarding()),
  ...ownProps,
});


const createProps = props => ({
  translation: [
    {
      title: 'Thanks for voting!',
      description: 'Use this app to vote on weekly polls and stand to win a trip to the Big Debate studio and other prizes. The more you vote, the greater your chance of winning.',
      primary: 'Click here to find out more',
    },
  ],
  onCompleteOnboarding: () => {
    return navigate('./intro');
  },
  logo: true,
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

    const passedProps = createProps(props);
    return createElement(BigDebateJoin, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
