import uuid from 'uuid';
import isNull from 'lodash.isnull';
import { GAME_DURATION, UPDATE_WORD, DECREMENT_INDEX } from '../../constants';
import { padWordsWithSpaces, getLastCharInString } from '../../utils/utils';

import {
  secondstoMillisecond,
  createIndexWordObjects,
  getRandomNumber,
  generateLoremIpsum,
  processTextToArray
} from '../../utils/utils';
import { WPM_NULL, AWAITS_TYPING } from '../../constants';

function wordsArray(customWordsState) {
  if (isNull(customWordsState)) {
    return generateLoremIpsum();
  }
  return processTextToArray(this.props.customWords);
}

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

export function createGame() {
  const gameId = `game-${uuid()}`;
  const overallTime = secondstoMillisecond(GAME_DURATION);
  const wordsArrayPaddedWithSpaces = padWordsWithSpaces(wordsArray(null));
  const words = createIndexWordObjects(
    wordsArrayPaddedWithSpaces,
    getRandomNumber()
  );
  return {
    overallTime,
    gameId,
    index: 0,
    scrollIndex: 0,
    words,
    wpm: WPM_NULL,
    gameDuration: GAME_DURATION,
    gameStatus: AWAITS_TYPING
  };
}
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
