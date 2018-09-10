import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';



const mapPropsToState = state => {
  return {
    myGame: state.myGame
  };
};

export default connect(
  mapPropsToState,
  null
)(SingleGamePage);
