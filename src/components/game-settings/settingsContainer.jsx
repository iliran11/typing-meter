import { connect } from 'react-redux';
import { updateCustomWords } from './settingsActions';
import Settings from './settings';

const mapStateToProps = state => {
  return {
    customWords: state.gameSettings.customWords
  };
};
const mapDispatchToProps = {
  updateCustomWords
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
