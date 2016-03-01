import {
  UPDATE_ROLE_RESOURCES_ACT,
  REQUEST_ROLE_INDEX_ACT,
  REQUEST_ROLE_SHOW_ACT,
  REQUEST_ROLE_NEW_ACT
} from '../actions/Role';

const defaultState = {
  role: {},
  roleResources: [],
  resources: []
}

export default function Role(state = defaultState, action) {
  const actType = action.type;

  if(actType === UPDATE_ROLE_RESOURCES_ACT) {
    const { roleResources } = action;
    return Object.assign({}, state, { roleResources });
  } else if(actType === REQUEST_ROLE_INDEX_ACT) {
    const roles = action.res.data;
    return Object.assign({}, state, { roles });     
  } else if(actType === REQUEST_ROLE_SHOW_ACT) {
    const data = action.res.data;
    return Object.assign({}, state, {
      role: data.role,
      roleResources: data.role_resources,
      resources: data.resources
    });
  } else if(actType === REQUEST_ROLE_NEW_ACT) {
    const data = action.res.data;
    return Object.assign({}, state, {
      role: {},
      roleResources: [],
      resources: data.resources
    });
  }

  return state;
}