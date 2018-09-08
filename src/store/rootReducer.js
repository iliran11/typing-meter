import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
import activeGames from './activeGamesReducer';

export default combineReducers({
  gameSettings,
  results,
  activeGames
});
