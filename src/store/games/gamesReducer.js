import { createGame } from './gameActions';
import { UPDATE_WORD, GAME_ID_MY, DECREMENT_INDEX } from '../../constants';

const initialState = {
  [GAME_ID_MY]: createGame()
};

export default (state = initialState, action) => {
  const { payload: {index, newTypedWord, gameId} = {} } = action;
  switch (action.type) {
    case UPDATE_WORD:
      const nextWordsState = [...state[gameId].words];
      nextWordsState[index].typed = newTypedWord;
      return {
        ...state,
        [gameId]: {
          ...state[gameId],
          words: nextWordsState,
          index
        }
      };
    case DECREMENT_INDEX: {
      return {
        ...state,
        [gameId]: {
          ...state[gameId],
          index
        }
      };
    }
    default:
      return state;
  }
};
