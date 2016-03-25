import request from '../lib/request';

export const REQUEST_TEAM_INDEX_PANE_ACT = 'REQUEST_TEAM_INDEX_PANE_ACT';

export function requestTeamIndexPaneAct() {
  return {
    type: REQUEST_TEAM_INDEX_PANE_ACT
  }
}

export const REQUEST_ROLE_INDEX_PANE_ACT = 'REQUEST_ROLE_INDEX_PANE_ACT';

export function requestRoleIndexPaneAct() {
  return {
    type: REQUEST_ROLE_INDEX_PANE_ACT
  }
}