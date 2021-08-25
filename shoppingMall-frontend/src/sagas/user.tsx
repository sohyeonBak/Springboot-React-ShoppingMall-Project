import axios from "axios";
import { all, fork, takeLatest } from "redux-saga/effects";
import { logInAsync, LogInResProfile, LOG_IN_REQUEST, signUpAsync, SignUpProfile, SIGN_UP_REQUEST } from "../reducers/user";
import { createAsyncSaga } from "./util";


async function signUpAPI(payload:any) {
  const response = await axios.post<SignUpProfile>('/join', payload)
  return response.data
}

async function logInAPI(payload:any) {
  const response = await axios
    .post<LogInResProfile>('/login', payload)
    .then((res)=>{
      if(res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data))
      }
      return res.data
    })
  return response
}


const getSignUpSaga = createAsyncSaga(signUpAsync, signUpAPI)
const getLogInSaga = createAsyncSaga(logInAsync, logInAPI)


function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, getSignUpSaga)
}

function* watchLogIn(){
  yield takeLatest(LOG_IN_REQUEST, getLogInSaga)
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn)
  ])
}
