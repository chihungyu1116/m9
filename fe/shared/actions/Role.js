import request from '../lib/request';

const API = {
  index: '/roles',
  new: '/roles/new',
  show: '/roles/:id',
  create: '/roles/create',
  update: '/roles/update'
};

export const UPDATE_ROLE_RESOURCES_ACT = 'UPDATE_ROLE_RESOURCES_ACT';

export function updateRoleResourcesAct(roleResources) {
  return {
    type: UPDATE_ROLE_RESOURCES_ACT,
    roleResources
  }
}

export const REQUEST_ROLE_INDEX_ACT = 'REQUEST_ROLE_INDEX_ACT';

export function requestRoleIndexAct(data) {
  return {
    type: REQUEST_ROLE_INDEX_ACT,
    promise: request.get(API.index, data)
  }
}


export const REQUEST_ROLE_CREATE_ACT = 'REQUEST_ROLE_CREATE_ACT';

export function requestRoleCreateAct(data) {
  return {
    type: REQUEST_ROLE_CREATE_ACT,
    promise: request.post(API.create, data)
  }
}

export const REQUEST_ROLE_UPDATE_ACT = 'REQUEST_ROLE_UPDATE_ACT';

export function requestRoleUpdateAct(data) {
  return {
    type: REQUEST_ROLE_UPDATE_ACT,
    promise: request.put(API.update, data)
  }
}

export const REQUEST_ROLE_SHOW_ACT = 'REQUEST_ROLE_SHOW_ACT';

export function requestRoleShowAct(data) {
  const api = API.show.replace(/:id/, data.id);
  
  return {
    type: REQUEST_ROLE_SHOW_ACT,
    promise: request.get(api)
  }
}

export const REQUEST_ROLE_NEW_ACT = 'REQUEST_ROLE_NEW_ACT';

export function requestRoleNewAct() {
  console.log('request new ', API.new)
  return {
    type: REQUEST_ROLE_NEW_ACT,
    promise: request.get(API.new)
  }
}