import {
  INITIALIZE_PLAYERS,
  COMPETITOR_JOINED_GAME,
  SCORES_UPDATE
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
    case SCORES_UPDATE:
      const nextState = { ...state };
      action.payload.forEach(value => {
        const { score, playerId } = value;
        nextState[playerId].score = score;
      });
      return nextState;
    default:
      return state;
  }
};
