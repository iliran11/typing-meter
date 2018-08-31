import {
  SDK_LOADED,
  LOGIN_ATTEMPT,
  CHECK_STATUS,
  LOGOUT_ATTEMPT,
  LOAD_PROFILE_PIC,
  LOAD_FIRST_NAME
} from '../../constants';
const initialState = {
  sdkLoaded: false,
  status: null,
  userId: null
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SDK_LOADED:
      return {
        ...state,
        sdkLoaded: true
      };
    case LOGIN_ATTEMPT:
    case CHECK_STATUS:
      const { status, authResponse } = action.payload;
      return {
        ...state,
        status,
        authResponse
      };
    case LOAD_PROFILE_PIC:
      return {
        ...state,
        profilePicture: action.payload.data.url
      };
    case LOAD_FIRST_NAME:
      console.log(action.payload);
      return {
        ...state
      };
    case LOGOUT_ATTEMPT:
      return state;
      break;
    default:
      return state;
  }
}
