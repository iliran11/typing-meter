import { connect } from "react-redux";
import Game from './game'

const mapStateToProps = state => {
  return {
    customWords: state.gameSettings.customWords,
    gameDuration: state.gameSettings.gameDuration
  };
};

export default connect(mapStateToProps, null)(Game); 