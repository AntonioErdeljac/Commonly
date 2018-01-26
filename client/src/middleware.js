import agent from './agent';

const isPromise = promise => promise && typeof promise.then === 'function';

const promiseMiddleware = store => next => (action) => {
  if (isPromise(action.payload)) {
    const newAction = action;
    action.payload.then(
      (res) => {
        action.payload = res;
        store.dispatch(action);
      },
      (error) => {
        action.error = true;
        action.payload = error.response.body;
        store.dispatch(action);
      },
    );
    return;
  }
  next(action);
};

const authMiddleware = () => next => (action) => {
  if (action.type === 'LOGIN' || action.type === 'REGISTER') {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '');
    agent.setToken(null);
  }
  next(action);
};

export {
  authMiddleware,
  promiseMiddleware,
};
