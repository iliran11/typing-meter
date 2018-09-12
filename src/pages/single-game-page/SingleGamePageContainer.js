import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {updateWord} from '../../store/games/gameActions'
import { GAME_ID_MY } from '../../constants';

const mapPropsToState = state => {
  return {
    myGame: state.games[GAME_ID_MY]
  };
};

const mapDispatchToProps = {
  updateWord
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(SingleGamePage);
