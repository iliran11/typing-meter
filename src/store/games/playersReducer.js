import {
  UPDATE_WORD,
  RESET_GAME_WORDS,
  DECREMENT_INDEX,
  CREATE_MY_GAME,
  CREATE_COMPETITOR_GAME,
  INITIALIZE_PLAYERS,
  COMPETITOR_JOINED_GAME
} from '../../constants';
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_PLAYERS:
      return action.payload.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});
    case COMPETITOR_JOINED_GAME:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
