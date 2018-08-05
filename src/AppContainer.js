import { connect } from 'react-redux';
import App from './App';
import { loadSdk } from './store/facebookActions';
const mapDispatchToProps = { loadSdk };
export default connect(
  null,
  mapDispatchToProps
)(App);
