import { combineReducers } from 'redux';
import product from './products';
import user from './user'


const rootReducer = combineReducers({
  user,
  product
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>