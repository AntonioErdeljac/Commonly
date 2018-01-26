const isPromise = promise => promise && typeof promise.then === 'function';

const promiseMiddleware = store => next => (action) => {
  if (isPromise(action.payload)) {
    const newAction = action;
    action.payload.then(
      (res) => {
        newAction.payload = res;
        store.dispatch(newAction);
      },
      (err) => {
        newAction.error = true;
        newAction.payload = err.response.body;
        store.dispatch(newAction);
      },
    );
    return;
  }
  next(action);
};

export {
  promiseMiddleware,
};
