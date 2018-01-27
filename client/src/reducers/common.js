export default (state = {}, action) => {
  switch (action.type) {
    case 'APP_LOADED':
      return {
        ...state,
        appLoaded: true,
        token: action.token || null,
        currentUser: action.payload ? action.payload.user : null,
      };
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload ? action.payload.user : null,
        token: action.payload ? action.payload.user.token : null,
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        token: null,
      };
    default:
      return state;
  }
};
