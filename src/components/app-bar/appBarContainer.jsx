import { connect } from 'react-redux';
import AppBar from './appbar';

const mapStateToProps = state => {
  return {
    isGameActive: state.game.isGameActive
  };
};
export default connect(
  mapStateToProps,
  null
)(AppBar);
