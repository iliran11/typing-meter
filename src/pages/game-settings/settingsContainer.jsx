import { connect } from 'react-redux';
import { updateCustomWords, updateGameDuration } from './settingsActions';
import Settings from './settings';

const mapStateToProps = state => {
  const { customWords, gameDuration } = state.gameSettings;
  return {
    customWords,
    gameDuration
  };
};
const mapDispatchToProps = {
  updateCustomWords,
  updateGameDuration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
