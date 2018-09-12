import { connect } from 'react-redux';
import AppBar from './appbar';

const mapStateToProps = state => {
  return {
    isGameActive: false
  };
};
export default connect(
  mapStateToProps,
  null
)(AppBar);
