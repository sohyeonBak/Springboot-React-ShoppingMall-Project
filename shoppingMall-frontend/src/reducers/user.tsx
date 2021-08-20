import produce from "immer"

type MyInfo = {
  id: number,
  email:string,
  username: string,
  password: string
}

interface User {
  signUpLoading: boolean,
  signUpDone?: boolean,
  signUpError?: null,
  me?: MyInfo | null
}

export const initialState:User = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me:null
}


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;


const reducer = (state:User = initialState, action:any) => produce(state, (draft) => {
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