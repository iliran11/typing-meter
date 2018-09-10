import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import results from './resultsReducer';
import multiplayerGamesReducer from './games/multiplayerGamesReducer';
import myGameReducer from './games/myGameReducer'

export default combineReducers({
  gameSettings,
  results,
  multiplayerGames: multiplayerGamesReducer,
  myGame: myGameReducer
});
