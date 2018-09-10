import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
import multiplayerGamesReducer from './games/multiplayerGamesReducer';
import gamesReducer from './games/gamesReducer'

export default combineReducers({
  gameSettings,
  results,
  multiplayerGames: multiplayerGamesReducer,
  games: gamesReducer
});
