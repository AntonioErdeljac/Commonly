export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    default:
      return state;
  }
};
