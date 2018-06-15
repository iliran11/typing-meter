import { connect } from 'react-redux';
import { updateCustomWords } from './settingsActions';
import Settings from './settings';

const mapDispatchToProps = {
  updateCustomWords
};

export default connect(
  null,
  mapDispatchToProps
)(Settings);
