import { connect } from 'react-redux';
import { login, logout } from './LoginActions';
import Login from './Login';

const isConnected = state => {
  if (state.facebookReducer.status === 'connected') {
    return true;
  }
  return false;
};
const mapStateToProps = (state, ownProps) => {
  return {
    isConnected: isConnected(state)
  };
};
const mapDispatchToProps = {
  login,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
