import {
  SDK_LOADED,
  LOGIN_ATTEMPT,
  CHECK_STATUS,
  LOGOUT_ATTEMPT
} from '../constants';
const initialState = {
  sdkLoaded: false,
  status: null,
  userId: null
};

export function facebookReducer(state = initialState, action) {
  switch (action.type) {
    case SDK_LOADED:
      return {
        ...state,
        sdkLoaded: true
      };
    case LOGIN_ATTEMPT:
    case CHECK_STATUS:
      const {
        status,
        authResponse: { userId, accessToken }
      } = action.payload;
      return {
        ...state,
        status,
        userId,
        accessToken
      };
    case LOGOUT_ATTEMPT:
      console.log(action.payload);
      break;
    default:
      return state;
  }
}
