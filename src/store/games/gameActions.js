import { UPDATE_WORD, DECREMENT_INDEX,RESET_GAME_WORDS } from '../../constants';
import { getLastCharInString } from '../../utils/utils';
import { createGame } from '../../utils/gameUtils';

export function updateWord(newTypedWord, gameId) {
  return function(dispatch, getState) {
    const state = getState();

    const currentIndex = state.games[gameId].index;
    const currentWord = state.games[gameId].words[currentIndex];
    const isDeletionEvent = currentWord.typed.length > newTypedWord.length;
    const nextIndex =
      currentWord.isCompleted && !isDeletionEvent
        ? currentIndex + 1
        : currentIndex;
    const hasIndexChanged = currentIndex !== nextIndex;
    /**
     * if the index has changed it means we are in a new word territory.
     * so we will take only the last character of the input.
     * only the last char will be inserted to the word of the new index.
     */
    const typedWord = hasIndexChanged
      ? getLastCharInString(newTypedWord)
      : newTypedWord;
    dispatch({
      type: UPDATE_WORD,
      payload: {
        newTypedWord: typedWord,
        index: nextIndex,
        gameId
      }
    });
  };
}

export function updateIndex(newIndex) {}


/**
 * There is no correspond IncrementIndex action.
 * updateWordAction is also incrementing when it detects the word has been completed
 * and there is a need to automatically increment the index.
 *  
 */
 
export function decrementIndex(gameId) {
  return function(dispatch, getState) {
    const state = getState();
    const currentIndex = state.games[gameId].index;
    dispatch({
      type: DECREMENT_INDEX,
      payload: {
        index: currentIndex - 1,
        gameId
      }
    });
  };
}

export function resetGame(gameId) {
  return {
    type: RESET_GAME_WORDS,
    payload: {
      gameId,
      newGameState: createGame()
    }
  }
}
