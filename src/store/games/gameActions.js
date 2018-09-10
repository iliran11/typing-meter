import uuid from 'uuid';
import isNull from 'lodash.isnull';
import {GAME_DURATION} from '../../constants'

import {
  secondstoMillisecond,
  createIndexWordObjects,
  getRandomNumber,
  generateLoremIpsum,
  processTextToArray
} from '../../utils/utils';
import { WPM_NULL, AWAITS_TYPING,CREATE_GAME } from '../../constants';

function wordsArray(customWordsState) {
  if (isNull(customWordsState)) {
    return generateLoremIpsum();
  }
  return processTextToArray(this.props.customWords);
}


export function changeWord(gameId) {
  return function (dispatch,getState) {
/*     const state = getState();
 */  }
}

export function createGame() {
  const gameId = `game-${uuid()}`;
  const overallTime = secondstoMillisecond(GAME_DURATION);
  const words = createIndexWordObjects(
    wordsArray(null),
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