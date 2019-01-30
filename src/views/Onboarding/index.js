import { connect } from 'react-redux';
import State from './State';


const mapStateToProps = ({ user }, ownProps) => ({
  language: user.ownProps,
  ...ownProps,
});


const connectToStore = connect(mapStateToProps);


export default connectToStore(State);
