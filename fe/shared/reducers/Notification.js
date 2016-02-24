import {
  CREATE_RESOURCE_ACT,
  UPDATE_RESOURCE_ACT
} from '../actions/Resource';

export default function Notification(state = {}, action) {
  const actType = action.type;
  
  if(actType === CREATE_RESOURCE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    notifications.push({
      type: 'success',
      message: 'Resource created successfully!'
    });

    return Object.assign({}, state, { notifications });
  } else if(actType === UPDATE_RESOURCE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    notifications.push({
      type: 'success',
      message: 'Resource updated successfully!'
    });

    return Object.assign({}, state, { notifications });
  }

  return state;
}