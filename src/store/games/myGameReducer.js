import { createGame } from './gameActions';
import { UPDATE_WORD } from '../../constants';

const initialState = createGame();

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WORD:
      const { index, newTypedWord } = action.payload;
      const nextWordsState = [...state.words];
      nextWordsState[index].typed = newTypedWord;
      return {
        ...state,
        words: nextWordsState
      };
    default:
      return state;
  }
};
