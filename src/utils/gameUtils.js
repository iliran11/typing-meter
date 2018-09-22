import uuid from 'uuid';
import isNull from 'lodash.isnull';
import { WPM_NULL, GAME_DURATION } from '../constants';
import {
  padWordsWithSpaces,
  secondstoMillisecond,
  createIndexWordObjects,
  getRandomNumber,
  generateLoremIpsum,
  processTextToArray
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
