import { combineReducers } from 'redux';
import { facebookReducer } from './facebookReducer';
import gameSettings from '../components/game-settings/gameSettingsReducer';
export default combineReducers({
  gameSettings,
  facebookReducer
});
