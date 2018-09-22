import { connect } from 'react-redux';
import MyGame from './MyGame';
import { updateWord, decrementIndex } from '../../store/games/gameActions';
import { GAME_ID_MY } from '../../constants';

const mapPropsToState = (state, ownProps) => {
  return {
    myGame: state.games[ownProps.gameId]
  };
};

const mapDispatchToProps = {
  updateWord,
  decrementIndex
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(MyGame);
