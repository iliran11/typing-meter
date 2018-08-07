import { fbLogin, fbLogout } from 'facebook-sdk-loader';
import { LOGIN_ATTEMPT, LOGOUT_ATTEMPT, CHECK_STATUS } from '../../constants';

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
      console.log('here')
      dispatch({
        type: LOGOUT_ATTEMPT,
        payload: response
      });
    });
  };
}
