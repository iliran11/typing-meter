import { connect } from 'react-redux';
import ResultPage from './ResultPage';

const mapStateToProps = (state, ownProps) => {
  const urlParams = new URLSearchParams(window.location.search);
  const resultId = urlParams.get('resultId');
  const { wpmScore, correctTypedWords, createdDate } = state.results[resultId];
  console.log(state.results[resultId]);
  return {
    wpmScore,
    correctTypedWords,
    createdDate
  };
};
export default connect(
  mapStateToProps,
  null
)(ResultPage);
