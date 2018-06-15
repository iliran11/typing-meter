import { GAME_DURATION } from '../../constants';
const initialState = {
  gameDuration: GAME_DURATION,
  customWords: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_CUSTOM_WORDS':
      return {
        ...state,
        customWords: payload
      };
    case 'UPDATE_GAME_DURATION':
      return {
        ...state,
        gameDuration: payload
      };
    default:
      return state;
  }
};
