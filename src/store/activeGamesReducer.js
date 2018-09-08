import { CREATE_GAME } from '../constants';
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return {
        ...state,
        [action.payload.gameId]: action.payload
      }
    default:
      return state;
  }
};