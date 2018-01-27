import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authMiddleware, promiseMiddleware } from './middleware';

import { auth, common, tasks, editor } from './reducers';

const reducer = combineReducers({
  auth,
  common,
  tasks,
  editor,
});

const store = createStore(reducer, applyMiddleware(promiseMiddleware, authMiddleware));

export default store;
