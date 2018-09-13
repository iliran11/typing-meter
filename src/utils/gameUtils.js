import uuid from 'uuid';
import isNull from 'lodash.isnull';
import {WPM_NULL, AWAITS_TYPING, GAME_DURATION } from '../constants';
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
