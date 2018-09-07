import { CHANGE_GAME_STATUS, CREATE_RESULT_RECORD } from '../../constants';
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
    case CREATE_RESULT_RECORD:
      return {
        ...state,
        isGameActive: false
      };
    default:
      return state;
  }
};
