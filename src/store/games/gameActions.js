import uuid from 'uuid';
import isNull from 'lodash.isnull';
import { GAME_DURATION, UPDATE_WORD } from '../../constants';
import {padWordsWithSpaces,getLastCharInString} from '../../utils/utils'

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
    
    const currentIndex = state.games[gameId].index
    const currentWord = state.games[gameId].words[currentIndex]
    const nextIndex = currentWord.isCompleted ? currentIndex + 1 : currentIndex;
    const hasIndexChanged = currentIndex!== nextIndex;
    /**
     * if the index has changed it means we are in a new word territory.
     * so we will take only the last character of the input.
     * only the last char will be inserted to the word of the new index.
     */
    const typedWord = hasIndexChanged ? getLastCharInString(newTypedWord) : newTypedWord 
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
  const words = createIndexWordObjects(wordsArrayPaddedWithSpaces, getRandomNumber());
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
