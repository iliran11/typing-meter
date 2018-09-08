import uuid from 'uuid';
import isNull from 'lodash.isnull';

import {
  secondstoMillisecond,
  createIndexWordObjects,
  getRandomNumber,
  generateLoremIpsum,
  processTextToArray
} from '../utils/utils';
import { WPM_NULL, AWAITS_TYPING,CREATE_GAME } from '../constants';

function wordsArray(customWordsState) {
  if (isNull(customWordsState)) {
    return generateLoremIpsum();
  }
  return processTextToArray(this.props.customWords);
}

export function createGame() {
  return (dispatch, getState) => {
    const state = getState();
    const gameId = `game-${uuid()}`;
    const overallTime = secondstoMillisecond(state.gameSettings.gameDuration);
    const words = createIndexWordObjects(
      wordsArray(state.gameSettings.customWords),
      getRandomNumber()
    );
    const initialState = {
      overallTime,
      gameId,
      index: 0,
      scrollIndex: 0,
      words,
      wpm: WPM_NULL,
      gameDuration: state.gameSettings.gameDuration,
      gameStatus: AWAITS_TYPING
    };
    dispatch({
      type: CREATE_GAME,
      payload: initialState
    });
  };
}
