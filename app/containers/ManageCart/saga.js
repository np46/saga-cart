import { takeLatest, call, put} from 
'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import  * as types from './constants';
import { getUserInfoSuccessAction, getUserInfoFailureAction} from './actions';

function * getUserInfoSaga(action){
  const {userID} = action;
  const apiUrl = '/api/user/${userID}';
}

try{
  const results = yield call(fetch, apiurl);
  const resolvedResults = yield results.json();

if (resolvedResults) {
  yield put(getUserInfoSuccessAction(resolvedResults));
}

} catch(err) {
  console.error('Error while fetching user details', err);
  yield put(getUserInfoFailureAction(err));
}
}

export default function * manageCartSaga(){
  yield takeLatest(types.GET_USERINFO, getUserInfoSaga);
}


