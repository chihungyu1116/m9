import {
  REQUEST_TEAM_NEW_ACT,
  REQUEST_TEAM_SHOW_ACT,
  REQUEST_TEAM_INDEX_ACT,
  HANDLE_ROLE_SELECT_ACT
} from '../actions/Team';

export default function Team(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_TEAM_INDEX_ACT) {
    const { teams } = action.res.data;
    
    return Object.assign({}, state, { teams });
  } else if(actType === REQUEST_TEAM_SHOW_ACT) {
    const {
      team,
      team_roles,
      team_members,
      users,
      roles
    } = action.res.data;
    
    return Object.assign({}, state, {
      team,
      teamRoles: team_roles ,
      teamMembers: team_members,
      roles,
      users
    });
  } else if(actType === REQUEST_TEAM_NEW_ACT) {
    const {
      team,
      team_roles,
      team_members,
      users,
      roles
    } = action.res.data;

    return Object.assign({}, state, {
      team,
      teamRoles: team_roles ,
      teamMembers: team_members,
      roles,
      users
    });
  } else if(actType === HANDLE_ROLE_SELECT_ACT) {
    const { teamRoles } = action;
    
    return Object.assign({}, state, {
      teamRoles
    });
  }

  return state;
}