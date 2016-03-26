import {
  REQUEST_TEAM_NEW_ACT,
  REQUEST_TEAM_SHOW_ACT,
  REQUEST_TEAM_INDEX_ACT,
  REQUEST_TEAM_UPDATE_ACT,
  SELECT_NAV_LIST_ACT
} from '../actions/Team';

export default function Team(state = {}, action) {
  const actType = action.type;

  if(actType === REQUEST_TEAM_INDEX_ACT + '_SUCCESS') {
    const { teams } = action.res.data;
    
    return Object.assign({}, state, { teams });
  } else if(actType === REQUEST_TEAM_SHOW_ACT + '_SUCCESS') {
    const {
      team,
      team_roles,
      team_members,
      roles
    } = action.res.data;
    
    return Object.assign({}, state, {
      team,
      teamRoles: team_roles ,
      teamMembers: team_members,
      roles
    });
  } else if(actType === REQUEST_TEAM_NEW_ACT) {
    return Object.assign({}, state, {
      team: {},
      teamMembers: []
    });
  } else if(actType === REQUEST_TEAM_NEW_ACT + '_SUCCESS') {
    const {
      team,
      team_roles,
      team_members,
      roles
    } = action.res.data;

    return Object.assign({}, state, {
      team,
      teamRoles: team_roles ,
      teamMembers: team_members,
      roles
    });
  } else if(actType === SELECT_NAV_LIST_ACT) {
    return Object.assign({}, state, {
      navListActiveIndex: action.index  
    });
  }

  return state;
}