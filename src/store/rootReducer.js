import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
export default combineReducers({
  gameSettings,
  results
});
