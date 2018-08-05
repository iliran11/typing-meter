import { SDK_LOADED } from './constants';
const initialState = {
  sdkLoaded: false
};

export function facebookReducer(state = initialState, action) {
  switch (action.type) {
    case SDK_LOADED:
      return {
        ...state,
        sdkLoaded: true
      };

    default:
      return state;
  }
}
