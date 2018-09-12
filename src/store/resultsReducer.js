import { CREATE_RESULT_RECORD } from '../constants';
const initialState = {
  
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_RESULT_RECORD:
      return {
        ...state,
        [payload.resultId]: payload
      };
    default:
      return state;
  }
};
