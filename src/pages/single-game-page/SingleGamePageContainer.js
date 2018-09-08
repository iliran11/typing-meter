import { connect } from 'react-redux';
import SingleGamePage from './SingleGamePage';
import {createGame} from '../../store/gameActions';

const mapDisptachToProps = {
  createGame
};
export default connect(
  null,
  mapDisptachToProps
)(SingleGamePage);
