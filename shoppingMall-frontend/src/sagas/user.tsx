import axios, { AxiosResponse } from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AsyncActionCreatorBuilder, PayloadAction } from "typesafe-actions";
import { signUpAsync, SignUpProfile, SIGN_UP_REQUEST } from "../reducers/user";

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  return action.payload !== undefined;
}

function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, undefined]],
    [T2, [P2, undefined]],
    [T3, [P3, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>,
  ) {
    return function* saga(
      action: ReturnType<typeof asyncActionCreator.request>
    ) {
      try{
        const response: P2 = isPayloadAction<P1>(action)
          ? yield call(promiseCreator, action.payload)
          : yield call(promiseCreator);
        yield put(asyncActionCreator.success(response))
      }catch(e) {
        yield put(asyncActionCreator.failure(e))
      }
    }
  }


async function signUpAPI(payload:any) {
  const response = await axios.post<SignUpProfile>('/join', payload)
  console.log(response)
  return response.data
}


const getSignUpSaga = createAsyncSaga(signUpAsync, signUpAPI)


function* watchSignUp(){
  yield takeLatest(SIGN_UP_REQUEST, getSignUpSaga)
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp)
  ])
}
