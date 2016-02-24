import request from '../lib/request';

const API = {
  create: '/resources/create',
  update: '/resources/update',
  index: '/resources'
};

export const CREATE_RESOURCE_ACT = 'CREATE_RESOURCE_ACT';

export function createResourceAct(data) {
  return {
    type: CREATE_RESOURCE_ACT,
    promise: request.post(API.create, data)
  }
}

export const UPDATE_RESOURCE_ACT = 'UPDATE_RESOURCE_ACT';

export function updateResourceAct(data) {
  return {
    type: UPDATE_RESOURCE_ACT,
    promise: request.put(API.update, data)
  }
}

export const REQUEST_RESOURCES_ACT = 'REQUEST_RESOURCES_ACT';

export function requestResourcesAct(data) {
  return {
    type: REQUEST_RESOURCES_ACT,
    promise: request.get(API.index, data)
  }
}