import axios from "axios";
import { all, fork, takeLatest } from "redux-saga/effects";
import { logInAsync, LogInResProfile, LOG_IN_REQUEST, signUpAsync, SignUpProfile, SIGN_UP_REQUEST } from "../reducers/user";
import { createAsyncSaga } from "./util";


async function signUpAPI(payload:any) {
  const response = await axios.post<SignUpProfile>('/join', payload)
  console.log(response)
  return response.data
}

async function logInAPI(payload:any) {
  const response = await axios.post<LogInResProfile>('/login', payload)
  console.log(payload)
  return response.data
}


const getSignUpSaga = createAsyncSaga(signUpAsync, signUpAPI)
const getLogINSaga = createAsyncSaga(logInAsync, logInAPI)


function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, getSignUpSaga)
}

function* watchLogIn(){
  yield takeLatest(LOG_IN_REQUEST, getLogINSaga)
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn)
  ])
}
