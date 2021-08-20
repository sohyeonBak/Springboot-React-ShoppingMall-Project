import produce from "immer"
import { createAsyncAction } from "typesafe-actions";

type MyInfo = {
  id: number,
  email:string,
  username: string,
  password: string
}

interface SignUpResponse {
  signUpLoading: boolean,
  signUpDone?: boolean,
  signUpError?: null,
  me?: MyInfo | null
}

export const initialState:SignUpResponse = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me:null
}


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' ;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' ;

export const signUpAsync = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<string, SignUpResponse, Error>()

const reducer = (state:SignUpResponse = initialState, action:any) => produce(state, (draft) => {
  switch(action.type) {
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError=null;
    break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
    break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = true;
      draft.signUpError=action.error;
    break;
      default:
            break;
  }
})

export default reducer;