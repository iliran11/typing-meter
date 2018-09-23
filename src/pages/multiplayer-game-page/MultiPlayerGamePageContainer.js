import { connect } from 'react-redux';
import MultiPlayerGamePage from './MultiPlayerGamePage';

const mapPropsToState = state => {
  const gameObject = Object.values(state.games).find(
    gameObject => gameObject.myGame
  );

  return {
    myGameId: gameObject ? gameObject.gameId : null
  };
};

export default connect(
  mapPropsToState,
  null
)(MultiPlayerGamePage);
