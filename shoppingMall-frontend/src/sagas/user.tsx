import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducers/user";


function signUpAPI(data:any) {
  return axios.post('/categories', data)
}

function* signup(action:any) {
  try{
    // const result = yield call(signUpAPI, action.data);
    // console.log(result);
    yield put({
      type:SIGN_UP_SUCCESS,
    })
  }catch(error){
    yield put({
      type:SIGN_UP_FAILURE,
      data: error.response.data,
    })
  }
}

function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, signup)
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp)
  ])
}