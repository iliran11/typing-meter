import { connect } from 'react-redux';
import App from './App';
import { loadSdk } from './components/Login/LoginActions';
const mapDispatchToProps = { loadSdk };
export default connect(
  null,
  mapDispatchToProps
)(App);
