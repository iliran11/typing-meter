import { connect } from 'react-redux';
import MultiPlayerGamePage from './MultiPlayerGamePage';
import { broadcastMyName } from '../../store/games/gameActions';

const mapPropsToState = state => {
  const gameObject = Object.values(state.games).find(
    gameObject => gameObject.myGame
  );

  return {
    myGameId: gameObject ? gameObject.gameId : null,
    broadcastMyName,
    competitors: state.players
  };
};

export default connect(
  mapPropsToState,
  null
)(MultiPlayerGamePage);
