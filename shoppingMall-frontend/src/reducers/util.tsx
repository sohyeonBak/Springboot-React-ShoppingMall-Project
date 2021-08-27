import { AsyncActionCreatorBuilder,getType } from "typesafe-actions";

export type AsyncState<T, E = any> = {
  data: T | null;
  loading: boolean;
  done: boolean;
  error: E | null;
};

export const asyncState = {
  // 다음 코드는 화살표 함수에 Generic 을 설정 한 것입니다.
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    done: false,
    data: initialData || null,
    error: null
  }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: true,
    done: false,
    data: data || null,
    error: null
  }),
  done: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: false,
    done: true,
    data: data || null,
    error: null
  }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({
    loading: false,
    done: true,
    data: data || null,
    error: null
  }),
  error: <T, E>(error: E): AsyncState<T, E> => ({
    loading: false,
    done: false,
    data: null,
    error: error
  })
};




export type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export function transformToArray(
  asyncActionCreator: AnyAsyncActionCreator
) {
  const { request, success, failure } = asyncActionCreator;
  return [request, success, failure];
}

export function createAsyncReducer<
  S,
  AC extends AnyAsyncActionCreator,
  K extends keyof S
>(asyncActionCreator: AC, key: K) {
  const [request, success, failure] = transformToArray(
	asyncActionCreator,
  ).map(getType);
  return {
    
    [request]: (state: S) => ({
      ...state,
      [key]: asyncState.load(),
    }),
    [success]: (
      state: S,
    	action: ReturnType<typeof asyncActionCreator.success>,
    ) => ({
      ...state,
      [key]: asyncState.success(action.payload),
    }),
    [failure]: (
      state: S,
      action: ReturnType<typeof asyncActionCreator.failure>,
    ) => ({
      ...state,
      [key]: asyncState.error(action.payload),
    }),
  };
}