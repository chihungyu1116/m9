import {
  REQUEST_RESOURCE_NEW_ACT,
  REQUEST_RESOURCE_SHOW_ACT,
  REQUEST_RESOURCE_INDEX_ACT
} from '../actions/Resource';

export default function Resource(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_RESOURCE_INDEX_ACT + '_SUCCESS') {
    const resources = action.res.data;
    return Object.assign({}, state, { resources });
  } else if(actType === REQUEST_RESOURCE_SHOW_ACT + '_SUCCESS') {
    const resource = action.res.data;
    return Object.assign({}, state, { resource });
  } else if(actType === REQUEST_RESOURCE_NEW_ACT) {
    return Object.assign({}, state, { resource: {} });
  }

  return state;
}