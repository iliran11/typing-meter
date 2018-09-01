import { connect } from 'react-redux';
import Game from './game';
import { createResultRecord } from './resultAction';

const mapStateToProps = state => {
  return {
    customWords: state.gameSettings.customWords,
    gameDuration: state.gameSettings.gameDuration
  };
};

const mapDispatchToProps = {
  createResultRecord
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
