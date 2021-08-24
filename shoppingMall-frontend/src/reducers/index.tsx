import { combineReducers } from 'redux';
import signup from './user'

const rootReducer = combineReducers({
  signup,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>