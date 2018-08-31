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
  SDK_LOADED,
  LOAD_PROFILE_PIC,
  CONNECTED,
  LOAD_FIRST_NAME
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
        dispatch({
          type: CHECK_STATUS,
          payload: result
        });
        if (result.status === CONNECTED) {
          return getUserPicure();
        }
      })
      .then(picture => {
        dispatch({
          type: LOAD_PROFILE_PIC,
          payload: picture
        });
        return getFirstName();
      })
      .then(firstNameResponse => {
        dispatch({
          type: LOAD_FIRST_NAME,
          payload: firstNameResponse
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

function getUserPicure() {
  return new Promise(resolve => {
    window.FB.api(
      '/10155286331682924/picture',
      'GET',
      { redirect: false, height: 40 },
      function(response) {
        resolve(response);
      }
    );
  });
}
function getFirstName() {
  return new Promise(resolve => {
    window.FB.api('/10155286331682924/', function(response) {
      console.log(response)
      if (response && !response.error) {
        resolve(response);
      }
    });
  });
}
