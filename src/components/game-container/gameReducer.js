import { CHANGE_GAME_STATUS } from '../../constants';

const initialState = {
  isGameActive: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return {
        ...state,
        isGameActive: action.payload
      };
    default:
      return state;
  }
};
