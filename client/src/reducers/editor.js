export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD_NEW_TASK':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
