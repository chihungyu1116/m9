import {
  REQUEST_LOGIN_ACT,
  REQUEST_LOGOUT_ACT,
  REQUEST_USER_ACT
} from '../actions/Session';

export default function Session(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_LOGIN_ACT) {
    const data = action.res.data;

    return Object.assign({}, state, {
      authToken: data.auth_token
    });
  } else if(actType === REQUEST_LOGOUT_ACT) {
    return Object.assign({}, state, {
      id: null,
      name: null,
      authToken: null
    });
  } else if(actType === REQUEST_USER_ACT) {
    const data = action.res.data;

    return Object.assign({}, state, {
      id: data.id,
      name: data.name,
      authToken: data.auth_token,
    });
  }
  
  return state;
}