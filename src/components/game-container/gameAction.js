import { CHANGE_GAME_STATUS } from '../../constants';

export const changeGameStatus = nextStatus => {
  return {
    type: CHANGE_GAME_STATUS,
    payload: nextStatus
  };
};
