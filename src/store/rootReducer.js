import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
import gamesReducer from './games/gamesReducer';
import playersReducer from './games/playersReducer';
import isGameActive from './isGameActive/isGameActiveReducer';

export default combineReducers({
  gameSettings,
  results,
  games: gamesReducer,
  players: playersReducer,
  isGameActive
});
