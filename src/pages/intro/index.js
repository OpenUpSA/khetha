import { createElement, Component } from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';


import { completeOnboarding } from '../../redux/modules/info';
import Onboarding from '../../components/views/Onboarding';
import Loading from '../../components/views/Loading';


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
      title: 'What is Khetha?',
      description: 'Khetha! is a game where you share your views on what\'s happening in South Africa. And you can win airtime at the same time! Make your voice heard!',
      primary: 'Start!',
    },
    {
      title: 'Want to win?',
      description: 'Complete tasks to unlock levels and stand a chance to win the following:',
      primary: 'Continue',
      list: [
        {
          title: 'Free Airtime',
          description: 'Stand a chance to win free airtime by completing your first task!',
        },
        {
          title: 'R25 000 worth of prizes',
          description: 'You will become eligible for more weekly/monthly prizes as you unlock more levels.',
        },
      ],
    },
    {
      title: 'Very important!',
      description: 'In order for us to arrange the delivery of your first reward and additional rewards you need to allow notifications:',
      primary: 'I understand',
    },
  ],
  onCompleteOnboarding: () => {
    props.logOnboarded();
    return navigate('./start/');
  },
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
    return createElement(Onboarding, passedProps);
  }
}


const connectedPage = connectToReduxStore(Page);


export default connectedPage;
