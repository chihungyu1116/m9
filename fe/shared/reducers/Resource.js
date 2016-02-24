import {
  REQUEST_RESOURCES_ACT
} from '../actions/Resource';

export default function Resource(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_RESOURCES_ACT) {
    const data = action.res.data;

    return Object.assign({}, state, {
      resources: data
    });
  }

  return state;
}