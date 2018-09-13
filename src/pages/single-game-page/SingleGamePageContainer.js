import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {startGame,endGame} from '../../store/isGameActive/isGameActiveActions'

const mapDispatchToProps = {
  startGame,endGame
}

export default connect(
  null,
  mapDispatchToProps
)(SingleGamePage);
