import { AxiosError } from "axios";
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { asyncState, AsyncState } from "./util";


//type
export interface SignUpProfile {
  email: string,
  username: string,
  password: string,
}

export interface LogInReqProfile {
  username: string,
  password: string,
}

export interface LogInResProfile {
  authorization: string,
}

export interface KakaoLogInReqProfile {
  code: string,
}


export interface KakaoLogInResProfile {
  authorization: string,
}


export interface LogOutProfile {
  authorization: null,
}

interface UserProfile {
  name: string,
  email : string,
  username : string,
  phone: number,
  address : {
    main_address : string,
    sub_address : string
  }

}


//state
export type UserState = {
  signup:AsyncState<SignUpProfile, Error>
  login: AsyncState<LogInResProfile, Error>
  me: AsyncState<UserProfile, Error>
}



//initialStat
const initialState: UserState = {
  signup: asyncState.initial(),
  login: asyncState.initial(),
  me: asyncState.initial()
}


//action type
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const KAKAO_LOG_IN_REQUEST = 'KAKAO_LOG_IN_REQUEST'
export const KAKAO_LOG_IN_SUCCESS = 'KAKAO_LOG_IN_SUCCESS'
export const KAKAO_LOG_IN_FAILURE = 'KAKAO_LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'


//action
export const signUpAsync = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<SignUpProfile, SignUpProfile, AxiosError>()

export type SignUpAction = ActionType<typeof signUpAsync>


export const logInAsync = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
)<LogInReqProfile, LogInResProfile, AxiosError>()

export const logInRequestAction =(payload: any)=>({
  type: LOG_IN_REQUEST,
  payload
})

export type LogInAction = ActionType<typeof logInAsync>


export const kakaoLogInAsync = createAsyncAction(
  KAKAO_LOG_IN_REQUEST,
  KAKAO_LOG_IN_SUCCESS,
  KAKAO_LOG_IN_FAILURE
)<KakaoLogInReqProfile, KakaoLogInResProfile, AxiosError>()

export const kakaoLogInRequestAction =(payload:any)=>({
  type: KAKAO_LOG_IN_REQUEST,
  payload
})

export type KakaoLogInAction = ActionType<typeof kakaoLogInAsync>


export const logOutAsync = createAsyncAction(
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
)<string, LogOutProfile, AxiosError>()

export const logOutRequestAction =()=>({
  type: LOG_OUT_REQUEST,
})

export type LogOutAction = ActionType<typeof logOutAsync>


//reducer

const user = createReducer<UserState>(initialState, {
  [SIGN_UP_REQUEST]: state => ({
    ...state,
    signup: asyncState.load()
  }),
  [SIGN_UP_SUCCESS]: (state) => ({
    ...state,
    signup: asyncState.done()
  }),
  [SIGN_UP_FAILURE]: (state, action) => ({
    ...state,
    signup: asyncState.error(action.payload)
  }),
  [LOG_IN_REQUEST]: state => ({
    ...state,
    login: asyncState.load()
  }),
  [LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    login: asyncState.success(action.payload),
  }),
  [LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    login: asyncState.error(action.payload)
  }),
  [KAKAO_LOG_IN_REQUEST]: state => ({
    ...state,
    login: asyncState.load()
  }),
  [KAKAO_LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    login: asyncState.success(action.payload),
  }),
  [KAKAO_LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    login: asyncState.error(action.payload)
  }),
  [LOG_OUT_REQUEST]: state => ({
    ...state,
    login: asyncState.load()
  }),
  [LOG_OUT_SUCCESS]: (state, action) => ({
    ...state,
    login: asyncState.success(action.payload),
  }),
  [LOG_OUT_FAILURE]: (state, action) => ({
    ...state,
    login: asyncState.error(action.payload)
  }),
})

export default user;