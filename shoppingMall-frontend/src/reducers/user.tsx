import { AxiosError } from "axios";
import produce from "immer"
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { asyncActionCreator } from "../sagas/util";
import { asyncState, AsyncState } from "./util";


//type
export interface SignUpProfile {
  email: string,
  username: string,
  password: string,
}


//state
export type SignUpState = {
  me: AsyncState<SignUpProfile, Error>;
}

const initialState: SignUpState = {
  me: asyncState.initial()
}


//action type
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'


export const signUpAsync = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<SignUpProfile, SignUpProfile, AxiosError>()

export type SignUpAction = ActionType<typeof signUpAsync>


//reducer
const signup = createReducer<SignUpState, SignUpAction>(initialState, {
  [SIGN_UP_REQUEST]: state => ({
    ...state,
    me: asyncState.load()
  }),
  [SIGN_UP_SUCCESS]: (state, action) => ({
    ...state,
    me: asyncState.success(action.payload)
  }),
  [SIGN_UP_FAILURE]: (state, action) => ({
    ...state,
    me: asyncState.error(action.payload)
  })
})

export default signup;