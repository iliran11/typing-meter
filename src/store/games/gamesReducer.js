import {
  UPDATE_WORD,
  GAME_ID_MY,
  RESET_GAME_WORDS,
  DECREMENT_INDEX,
  CREATE_MY_GAME,
  CREATE_COMPETITOR_GAME
} from '../../constants';
const initialState = {};

export default (state = initialState, action) => {
  const {
    payload: { index, newTypedWord, gameId, gameState, newGameState } = {}
  } = action;
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
    case DECREMENT_INDEX:
      return {
        ...state,
        [gameId]: {
          ...state[gameId],
          index
        }
      };

    case RESET_GAME_WORDS:
      return {
        ...state,
        [gameId]: {
          ...newGameState
        }
      };
    case CREATE_MY_GAME:
      return {
        ...state,
        [GAME_ID_MY]: {
          ...gameState
        }
      };
    case CREATE_COMPETITOR_GAME:
      return {
        ...state,
        [gameState.gameId]: {
          ...gameState
        }
      };

    default:
      return state;
  }
};
