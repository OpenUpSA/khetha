import { connect } from 'react-redux';
import Markup from './Markup';


const mapStateToProps = (state = {}, ownProps = {}) => ({
  points: state.user.points,
  ...ownProps,
});


const connectStore = connect(mapStateToProps);


export default connectStore(Markup);
