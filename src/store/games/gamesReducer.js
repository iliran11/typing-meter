import { createGame } from './gameActions';
import { UPDATE_WORD, GAME_ID_MY } from '../../constants';

const initialState = {
  [GAME_ID_MY]: createGame()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WORD:
      const { index, newTypedWord, gameId } = action.payload;
      const nextWordsState = [...state[gameId].words];
      nextWordsState[index].typed = newTypedWord;
      return {
        ...state,
        [gameId]: {
          ...state[gameId],
          words: nextWordsState
        }
      };
    default:
      return state;
  }
};
