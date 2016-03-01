import {
  REQUEST_RESOURCE_CREATE_ACT,
  REQUEST_RESOURCE_UPDATE_ACT
} from '../actions/Resource';

import {
  REQUEST_ROLE_CREATE_ACT,
  REQUEST_ROLE_UPDATE_ACT,
} from '../actions/Role';

import {
  AFTER_REDIRECT_ACT
} from '../actions/Route';

export default function Route(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_RESOURCE_CREATE_ACT) {
    return Object.assign({}, state, {
      redirect: '/resource'
    });
  } else if(actType === REQUEST_RESOURCE_UPDATE_ACT) {
    return Object.assign({}, state, {
      redirect: '/resource'
    });
  } else if(actType === AFTER_REDIRECT_ACT) {
    return Object.assign({}, state, {
      redirect: null
    });
  } else if(actType === REQUEST_ROLE_CREATE_ACT) {
    return Object.assign({}, state, {
      redirect: '/role'
    });
  } else if(actType === REQUEST_ROLE_UPDATE_ACT) {
    return Object.assign({}, state, {
      redirect: '/role'
    });
  }

  return state;
}