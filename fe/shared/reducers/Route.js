import {
  CREATE_RESOURCE_ACT,
  UPDATE_RESOURCE_ACT
} from '../actions/Resource';

import {
  AFTER_REDIRECT_ACT
} from '../actions/Route';

export default function Route(state = {}, action) {
  const actType = action.type;

  if(actType === CREATE_RESOURCE_ACT) {
    return Object.assign({}, state, {
      redirect: '/resource'
    });
  } else if(actType === UPDATE_RESOURCE_ACT) {
    return Object.assign({}, state, {
      redirect: '/resource'
    });
  } else if(actType === AFTER_REDIRECT_ACT) {
    return Object.assign({}, state, {
      redirect: null
    });
  }

  return state;
}