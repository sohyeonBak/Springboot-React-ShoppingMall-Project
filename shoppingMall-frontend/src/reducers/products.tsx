import produce from "immer"

interface RootState {
  id: number,
  kind: string
}

export const initialState = {
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
  mainCategory:[
    {
      id:1,
      kind: '상의',
    }
  ],
  saveProductLoading: false,
  saveProductDone: false,
  saveProductError: null,
}

const dummyCategory = {
  id:2,
  kind: '하의',
}

export const SAVE_PRODUCT_REQUEST = 'SAVE_PRODUCT_REQUEST';
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';

const reducer = (state = initialState, action:any) => produce(state, (draft)=>{
  switch (action.type) {
    case SAVE_PRODUCT_REQUEST:
      draft.saveProductLoading = true;
      draft.saveProductDone = false;
      draft.saveProductError = null;
    break;
    case SAVE_PRODUCT_SUCCESS:
      draft.saveProductLoading = false;
      draft.saveProductDone = true;
      draft.saveProductError = null;
    break;
    case SAVE_PRODUCT_FAILURE:
      draft.saveProductLoading = true;
      draft.saveProductDone = false;
      draft.mainCategory.push(dummyCategory);
    break;
    default:
      break;
  }
})

export default reducer;