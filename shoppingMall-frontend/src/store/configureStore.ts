import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers'
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();
const createAppStore = () => {
  const middleware = [sagaMiddleware];
  const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware)));
  sagaMiddleware.run(rootSaga)
  return store
}

export const AppStore = createAppStore();