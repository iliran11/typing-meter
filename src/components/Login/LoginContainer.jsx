import { connect } from 'react-redux';
import { login, logout } from './LoginActions';
import Login from './Login';

const isConnected = state => {
  if (state.login.status === 'connected') {
    return true;
  }
  return false;
};
const mapStateToProps = (state, ownProps) => {
  return {
    isConnected: isConnected(state),
    profilePicture: state.login.profilePicture
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
