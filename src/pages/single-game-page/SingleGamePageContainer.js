import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {updateWord} from '../../store/games/gameActions'

const mapPropsToState = state => {
  return {
    myGame: state.myGame
  };
};

const mapDispatchToProps = {
  updateWord
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(SingleGamePage);
