import { combineReducers } from 'redux';
import LoginReducer from '../components/Login/LoginReducer';
import gameSettings from '../components/game-settings/gameSettingsReducer';
export default combineReducers({
  gameSettings,
  login: LoginReducer
});
