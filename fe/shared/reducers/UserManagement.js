import {
  REQUEST_TEAM_INDEX_PANE_ACT,
  REQUEST_ROLE_INDEX_PANE_ACT
} from '../actions/UserManagement';

export default function UserManagement(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_TEAM_INDEX_PANE_ACT) {
    return Object.assign({}, state, {
      activePane: 'team'
    });
  } else if(actType === REQUEST_ROLE_INDEX_PANE_ACT) {
    return Object.assign({}, state, {
      activePane: 'role'
    });
  }

  return state;
}