import { REQUEST_LOGIN_ACT } from '../actions/Session';

export default function Session(state = {}, action) {
  const atype = action.type;

  if(atype === REQUEST_LOGIN_ACT) {
    const data = action.res.data;

    return Object.assign({}, state, {
      authToken: data.auth_token
    });
  }
  
  return state;
}