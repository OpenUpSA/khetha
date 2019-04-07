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
      // TODO (Pi 2019-03-14): This gets text-flowed in the current HTML output.
      //  Add line / paragraph break markup?
      description: "Don't miss the Big Debate - Sunday, 17 March on SABC 2. PRIZES UP FOR GRABS!! Keep voting and stand a chance to win a trip to the Big Debate studio live show, and prizes to the value of R25,000 by playing the Khetha! game. Would you like to play?",
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
