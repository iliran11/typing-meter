import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {startGame,endGame} from '../../store/isGameActive/isGameActiveActions'
import {GAME_ID_MY} from '../../constants'

const mapDispatchToProps = {
  startGame,endGame
}

const mapStateToProps = (state) => {
  return {
    active: state.isGameActive,
    words: state.games[GAME_ID_MY].words
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleGamePage);
