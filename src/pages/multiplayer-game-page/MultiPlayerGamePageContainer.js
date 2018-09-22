import { connect } from 'react-redux';
import MultiPlayerGamePage from './MultiPlayerGamePage';
import { GAME_ID_MY } from '../../constants';

const mapPropsToState = state => {
  return {
    myGame: state.games[GAME_ID_MY]
  };
};

export default connect(
  mapPropsToState,
  null
)(MultiPlayerGamePage);
