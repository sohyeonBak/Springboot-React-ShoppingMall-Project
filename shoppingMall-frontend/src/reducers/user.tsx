import { AxiosError } from "axios";
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
  user:{
    username: string,
    email: string
  }
  accessToken: string,
}

//state
export type UserState = {
  login: AsyncState<LogInResProfile,Error>
}



//initialStat
const initialState: UserState = {
  login: asyncState.initial()
}


//action type
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'


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
  [LOG_IN_SUCCESS]: (state, action) => (console.log(action.payload),
    {
    ...state,
    login: asyncState.success(action.payload)
    
  }),
  [LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    login: asyncState.error(action.payload)
  }),
})

export default user;