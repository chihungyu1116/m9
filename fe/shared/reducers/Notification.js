import {
  REQUEST_RESOURCE_CREATE_ACT,
  REQUEST_RESOURCE_UPDATE_ACT
} from '../actions/Resource';

import {
  REQUEST_ROLE_CREATE_ACT,
  REQUEST_ROLE_UPDATE_ACT
} from '../actions/Role';

import {
  REQUEST_NOTIFICATION_CLOSE
} from '../actions/Notification';

export default function Notification(state = {}, action) {
  const actType = action.type;
  
  if(actType === REQUEST_RESOURCE_CREATE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    const notification = {
      type: 'success',
      message: 'Resource created successfully!'
    };

    notifications.push(notification);

    return Object.assign({}, state, {
      notification,
      notifications
    });
  } else if(actType === REQUEST_RESOURCE_UPDATE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    const notification = {
      type: 'success',
      message: 'Resource updated successfully!'
    };

    notifications.push(notification);

    return Object.assign({}, state, {
      notification,
      notifications
    });
  } else if(actType === REQUEST_ROLE_CREATE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    const notification = {
      type: 'success',
      message: 'Role created successfully!'
    };

    notifications.push(notification);

    return Object.assign({}, state, {
      notification,
      notifications
    });
  } else if(actType === REQUEST_ROLE_UPDATE_ACT) {
    let notifications = state.notifications ? state.notifications.slice() : [];

    const notification = {
      type: 'success',
      message: 'Role updated successfully!'
    };

    notifications.push(notification);

    return Object.assign({}, state, {
      notification,
      notifications
    });
  } else if(actType === REQUEST_NOTIFICATION_CLOSE) {
    return Object.assign({}, state, { notification: null });
  }

  return state;
}