import axios from "axios";
import { all, fork, takeLatest } from "redux-saga/effects";
import { kakaoLogInAsync, KakaoLogInResProfile, KAKAO_LOG_IN_REQUEST, logInAsync, LogInResProfile,  LOG_IN_REQUEST, signUpAsync, SignUpProfile, SIGN_UP_REQUEST } from "../reducers/user";
import { createAsyncSaga } from "./util";


async function signUpAPI(payload:any) {
  const response = await axios.post<SignUpProfile>('/join', payload)
  return response.data
}

async function logInAPI(payload:any) {
  const response = await axios.post<LogInResProfile>('/login', payload).then((res)=>{  
      if(res.headers.authorization) {
        localStorage.setItem("token", JSON.stringify(res.headers.authorization))
      }
      return res.headers.authorization
    })
    

  return response
}

async function kakaologInAPI(payload:any) {
  console.log(payload)
  const response = await axios.get<KakaoLogInResProfile>(`/auth/kakao/callback?code=${payload}`)
  .then((res)=>{  
    if(res.headers.authorization) {
      localStorage.setItem("token", JSON.stringify(res.headers.authorization))
    }
    return res.headers.authorization
  })
  return response
}




const getSignUpSaga = createAsyncSaga(signUpAsync, signUpAPI)
const getLogInSaga = createAsyncSaga(logInAsync, logInAPI)
const getKakaoLogInSaga = createAsyncSaga(kakaoLogInAsync, kakaologInAPI)


function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, getSignUpSaga)
}

function* watchLogIn(){
  yield takeLatest(LOG_IN_REQUEST, getLogInSaga)
}

function* watchKakaoLogIn(){
  yield takeLatest(KAKAO_LOG_IN_REQUEST, getKakaoLogInSaga)
}


export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchKakaoLogIn),

  ])
}
