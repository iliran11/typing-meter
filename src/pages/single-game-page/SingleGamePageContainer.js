import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {startGame,endGame} from '../../store/isGameActive/isGameActiveActions'

const mapDispatchToProps = {
  startGame,endGame
}

const mapStateToProps = (state) => {
  return {
    active: state.isGameActive
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleGamePage);
