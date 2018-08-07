import { loadFbSdk, fbLogin, getFbLoginStatus } from 'facebook-sdk-loader';
import { SDK_LOADED, CHECK_STATUS } from '../constants';

export function loadSdk() {
  return dispatch => {
    loadFbSdk(653846344985974, 'v3.1')
      .then(result => {
        dispatch(sdkHasLoaded());
      })
      .then(() => {
        return getFbLoginStatus();
      })
      .then(result => {
        dispatch({
          type: CHECK_STATUS,
          payload: result
        });
      });
  };
}
export function sdkHasLoaded() {
  return {
    type: SDK_LOADED,
    payload: true
  };
}
