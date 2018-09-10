import uuid from 'uuid';
import isNull from 'lodash.isnull';
import isUndefined from 'lodash.isundefined'
import { GAME_DURATION, UPDATE_WORD } from '../../constants';

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

export function updateWord(newTypedWord,gameId) {
  // if undefined it means it will go to 'my game'
  if (isUndefined) {
    return {
      type: UPDATE_WORD,
      payload: {
        newTypedWord: newTypedWord,
        index: 0
      }
  }
  };
}

export function updateIndex(newIndex) {}

export function createGame() {
  const gameId = `game-${uuid()}`;
  const overallTime = secondstoMillisecond(GAME_DURATION);
  const words = createIndexWordObjects(wordsArray(null), getRandomNumber());
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
