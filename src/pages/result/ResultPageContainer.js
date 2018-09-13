import { connect } from 'react-redux';
import ResultPage from './ResultPage';
import {resetGame} from '../../store/games/gameActions'

const mapStateToProps = (state, ownProps) => {
  const urlParams = new URLSearchParams(window.location.search);
  const resultId = urlParams.get('resultId');
  const { wpmScore, correctTypedWords, createdDate } = state.results[resultId];
  return {
    wpmScore,
    correctTypedWords,
    createdDate
  };
};

const mapDispatchToprops = {
  resetGame
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ResultPage);
