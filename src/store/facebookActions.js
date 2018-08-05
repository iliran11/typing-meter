import { loadFbSdk, fbLogin } from 'facebook-sdk-loader';

import { SDK_LOADED } from './constants';
export function loadSdk() {
  return dispatch => {
    loadFbSdk(653846344985974, 'v3.1').then(result => {
      dispatch(sdkHasLoaded());
    });
  };
}
export function sdkHasLoaded() {
  return {
    type: SDK_LOADED,
    payload: true
  };
}
