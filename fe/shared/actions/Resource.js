import request from '../lib/request';

const API = {
  create: '/resources/create',
  update: '/resources/update'
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
    promise: request.get(API.update, data)
  }
}