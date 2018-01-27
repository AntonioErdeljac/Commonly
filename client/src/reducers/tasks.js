export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: (state.tasks || []).concat([action.payload.task]),
      };
    default:
      return state;
  }
};
