import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {startGame,endGame} from '../../store/isGameActive/isGameActiveActions'
import {createResultRecord} from '../../components/game-container/resultAction'
import {GAME_ID_MY} from '../../constants'

const mapDispatchToProps = {
  startGame,endGame, createResultRecord
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
