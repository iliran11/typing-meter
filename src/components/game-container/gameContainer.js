import { connect } from 'react-redux';
import { changeGameStatus } from './gameAction';
import Game from './game';
import { createResultRecord } from './resultAction';

const mapStateToProps = state => {
  return {
    customWords: state.gameSettings.customWords,
    gameDuration: state.gameSettings.gameDuration,
    gameStatus: state.game.gameStatus
  };
};

const mapDispatchToProps = {
  createResultRecord,
  changeGameStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
