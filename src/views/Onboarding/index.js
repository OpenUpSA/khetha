import { connect } from 'react-redux';
import State from './State';
import { setUserValue } from '../../redux/modules/user';


const mapStateToProps = ({ user }, ownProps) => ({
  language: user.language.value,
  onboardingLevel: user.onboarding.value,
  ...ownProps,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  changeLanguage: isoKey => dispatch(setUserValue({ language: isoKey })),
  changeOnboarding: percent => dispatch(setUserValue({ onboarding: percent })),
  ...ownProps,
});


const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connectToStore(State);
