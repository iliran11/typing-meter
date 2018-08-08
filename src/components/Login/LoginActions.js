import {
  fbLogin,
  fbLogout,
  loadFbSdk,
  getFbLoginStatus
} from 'facebook-sdk-loader';
import {
  LOGIN_ATTEMPT,
  LOGOUT_ATTEMPT,
  CHECK_STATUS,
  SDK_LOADED
} from '../../constants';

export function login() {
  return (dispatch, getState) => {
    fbLogin().then(result => {
      dispatch({
        type: LOGIN_ATTEMPT,
        payload: result
      });
    });
  };
}
export function logout() {
  return (dispatch, getState) => {
    fbLogout().then(response => {
      console.log('here');
      dispatch({
        type: LOGOUT_ATTEMPT,
        payload: response
      });
    });
  };
}
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
        console.log(result);
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
