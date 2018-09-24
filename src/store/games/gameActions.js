import {
  UPDATE_WORD,
  DECREMENT_INDEX,
  RESET_GAME_WORDS,
  CREATE_MY_GAME,
  CREATE_COMPETITOR_GAME,
  PLAYER_TYPING
} from '../../constants';
import { createGame, updateWordNextStatus } from '../../utils/gameUtils';
import socketHandler from '../../utils/socketHandler';

export function updateWord(newTypedWord, gameId) {
  return function(dispatch, getState) {
    socketHandler.emitEvent(PLAYER_TYPING, newTypedWord);
    const state = getState();
    const payload = updateWordNextStatus(newTypedWord, state.games[gameId]);
    dispatch({
      type: UPDATE_WORD,
      payload
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
    socketHandler.emitEvent(DECREMENT_INDEX);
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
  };
}

export function createMyGame(serverData, dispatch) {
  const gameState = createGame(serverData.gameId, serverData.words);
  dispatch({
    type: CREATE_MY_GAME,
    payload: {
      gameState
    }
  });
}

export function createCompetitorGame(gameState, dispatch) {
  dispatch({
    type: CREATE_COMPETITOR_GAME,
    payload: {
      gameState
    }
  });
}
