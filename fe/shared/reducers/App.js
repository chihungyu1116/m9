import {
  REQUEST_RESOURCE_CREATE_ACT,
  REQUEST_RESOURCE_UPDATE_ACT
} from '../actions/Resource';

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
  }
}