const defaultState = {

};

export default function appReducer(state = defaultState, action) {
  switch(action.type) {
    case 'NAV_TO':
      return state.concat(action.res.data);
    default:
      return state;
  }
}