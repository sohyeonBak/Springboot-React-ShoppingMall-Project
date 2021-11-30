import { AxiosError } from "axios";
import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { asyncState, AsyncState } from "./util";

//type
export interface CategoiesUpload {
  id: number,
  kind: string,
  details : []
}

export type ProductState = {
  mainCategory: AsyncState<CategoiesUpload[], Error>
}

const initialState: ProductState = {
  mainCategory: asyncState.initial()
}

export const initialStates = {
  mainProducts : [
    // {
    //   id: 1,
    //   content:'',
    //   price:0,
    //   profileImage:[''],
    //   productName:'',
    //   color:'',
    //   stock:'',
    //   size:'',
    //   Category:{
    //     id:1,
    //     kind: {
    //       id:1,
    //     }
    //   },
    //   Review:[
    //     {
    //       id:1,
    //       content:'',
    //       score:0,
    //       User:{
    //         id:1,
    //       },
    //       Product:{
    //         id:1,
    //       }
    //     }
    //   ],
    //   Recipt:{
    //     id:1,
    //     User:{
    //       id:1,
    //       username:''
    //     }
    //   }
    // }
  ],
  mainCategory:[],
  saveProductLoading: false,
  saveProductDone: false,
  saveProductError: null,
}

export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

export const addCategoryAsync = createAsyncAction(
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE
)<CategoiesUpload, CategoiesUpload, AxiosError>()

export const categoryRequestAction = (payload:any) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload
})

export type CategoryAction = ActionType<typeof addCategoryAsync>

const product = createReducer<ProductState>(initialState,{
  [ADD_CATEGORY_REQUEST]: state => ({
    ...state,
    mainCategory: asyncState.load()
  }),
  [ADD_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    mainCategory: asyncState.success(action.payload)
  }),
  [ADD_CATEGORY_FAILURE]: (state, action) => ({
    ...state,
    mainCategory: asyncState.error(action.payload)
  }),
})

export default product;