import request from '../lib/request';

const API = {
  index: '/teams',
  new: '/teams/new',
  show: '/teams/:id',
  create: '/teams',
  update: '/teams/update'
};

export const REQUEST_TEAM_INDEX_ACT = 'REQUEST_TEAM_INDEX_ACT';

export function requestTeamIndexAct(data) {
  return {
    type: REQUEST_TEAM_INDEX_ACT,
    promise: request.get(API.index, data)
  }
}

export const REQUEST_TEAM_CREATE_ACT = 'REQUEST_TEAM_CREATE_ACT';

export function requestTeamCreateAct(data) {
  return {
    type: REQUEST_TEAM_CREATE_ACT,
    promise: request.post(API.create, data)
  }
}

export const REQUEST_TEAM_UPDATE_ACT = 'REQUEST_TEAM_UPDATE_ACT';

export function requestTeamUpdateAct(data) {
  return {
    type: REQUEST_TEAM_UPDATE_ACT,
    promise: request.put(API.update, data)
  }
}

export const REQUEST_TEAM_SHOW_ACT = 'REQUEST_TEAM_SHOW_ACT';

export function requestTeamShowAct(data) {
  const api = API.show.replace(/:id/, data.id);
  
  return {
    type: REQUEST_TEAM_SHOW_ACT,
    promise: request.get(api)
  }
}

export const REQUEST_TEAM_NEW_ACT = 'REQUEST_TEAM_NEW_ACT';

export function requestTeamNewAct() {
  return {
    type: REQUEST_TEAM_NEW_ACT,
    promise: request.get(API.new)
  }
}

export const SELECT_NAV_LIST_ACT = 'SELECT_NAV_LIST_ACT';

export function selectNavListAct(index) {
  return {
    type: SELECT_NAV_LIST_ACT,
    index
  }
}