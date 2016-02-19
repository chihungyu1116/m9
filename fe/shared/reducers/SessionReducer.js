const defaultState = {
  userName: null,
  userId: null,
  userRoles: null
};

export default function sessionReducer(state = defaultState, action) {
  switch(action.type) {
    case 'NAV_TO':
      return state.concat(action.res.data);
    default:
      return state;
  }
}