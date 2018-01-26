import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authMiddleware, promiseMiddleware } from './middleware';

import { auth, common } from './reducers';

const reducer = combineReducers({
  auth,
  common,
});

const store = createStore(reducer, applyMiddleware(promiseMiddleware, authMiddleware));

export default store;
