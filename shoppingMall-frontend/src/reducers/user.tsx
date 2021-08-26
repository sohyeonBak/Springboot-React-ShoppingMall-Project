import { AxiosError } from "axios";
import { userInfo } from "os";
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { asyncState, AsyncState, createAsyncReducer } from "./util";


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
  accessToken: string,
}

export interface UserInfoProfile {
  username: string,
  email:string
}

//state
export type UserState = {
  login: AsyncState<LogInResProfile, Error>
  userInfo: AsyncState<UserInfoProfile, Error>
}



//initialStat
const initialState: UserState = {
  login: asyncState.initial(),
  userInfo: asyncState.initial()
}


//action type
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const USER_INFO_REQUEST = 'USER_INFO_REQUEST'
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS'
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE'


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

export const userInfoAsync = createAsyncAction(
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
)<string, UserInfoProfile, AxiosError>()

export type UserInfoAction = ActionType<typeof userInfoAsync>



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
    login: asyncState.success(action.payload)
    
  }),
  [LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    login: asyncState.error(action.payload)
  }),
})

export default user;