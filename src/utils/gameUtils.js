import isNull from 'lodash.isnull';
import { WPM_NULL, GAME_DURATION } from '../constants';
import {
  padWordsWithSpaces,
  secondstoMillisecond,
  createIndexWordObjects,
  getRandomNumber,
  generateLoremIpsum,
  processTextToArray,
  getLastCharInString
} from './utils';

function wordsArray(customWordsState) {
  if (isNull(customWordsState)) {
    return generateLoremIpsum();
  }
  return processTextToArray(this.props.customWords);
}
export function createRandomWordsArray() {
  return padWordsWithSpaces(wordsArray(null));
}
export function createGame(gameId, wordsArray) {
  const overallTime = secondstoMillisecond(GAME_DURATION);
  const wordObjects = createIndexWordObjects(wordsArray, getRandomNumber());
  return {
    overallTime,
    gameId,
    index: 0,
    scrollIndex: 0,
    words: wordObjects,
    wpm: WPM_NULL,
    gameDuration: GAME_DURATION
  };
}

export function updateWordNextStatus(newTypedWord, gameState) {
  const currentIndex = gameState.index;
  const currentWord = gameState.words[currentIndex];
  const isDeletionEvent = currentWord.typed.length > newTypedWord.length;
  const nextIndex =
    currentWord.isCompleted && !isDeletionEvent
      ? currentIndex + 1
      : currentIndex;
  const hasIndexChanged = currentIndex !== nextIndex;
  /**Y territory.
   * so we will take only the last character of the input.
   * only the last char will be inserted to the word of the new index.
   */
  const typedWord = hasIndexChanged
    ? getLastCharInString(newTypedWord)
    : newTypedWord;
  return {
    newTypedWord: typedWord,
    index: nextIndex,
    gameId: gameState.gameId

  }
}
