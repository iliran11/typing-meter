import { combineReducers } from 'redux';
import gameSettings from '../pages/game-settings/gameSettingsReducer';
import gameReducer from '../components/game-container/gameReducer';
export default combineReducers({
  gameSettings,
  game: gameReducer
});
