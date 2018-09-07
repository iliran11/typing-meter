import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
import gameReducer from '../components/game-container/gameReducer';

export default combineReducers({
  gameSettings,
  results,
  game: gameReducer
});
