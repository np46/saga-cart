/*
 *
 * ManageCart actions
 *
 */

import * as types from './constants';

export function getUserInfoAction(userID) {
  return {
    type: types.GET_USERINFO,
    userID,
  };
}

export function getUserInfoSuccessAction(results) {
  return {
    type: types.GET_USERINFO_SUCCESS,
    results,
  };
}

export function getUserInfoFailureAction(err) {
  return {
    type: types.GET_USERINFO_FAILURE,
    err,
  };
}
