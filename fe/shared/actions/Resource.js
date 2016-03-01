import request from '../lib/request';

const API = {
  index: '/resources',
  show: '/resources/:id',
  create: '/resources/create',
  update: '/resources/update'
};

export const REQUEST_RESOURCE_INDEX_ACT = 'REQUEST_RESOURCE_INDEX_ACT';

export function requestResourceIndexAct(data) {
  return {
    type: REQUEST_RESOURCE_INDEX_ACT,
    promise: request.get(API.index, data)
  }
}

export const REQUEST_RESOURCE_CREATE_ACT = 'REQUEST_RESOURCE_CREATE_ACT';

export function requestResourceCreateAct(data) {
  return {
    type: REQUEST_RESOURCE_CREATE_ACT,
    promise: request.post(API.create, data)
  }
}

export const REQUEST_RESOURCE_UPDATE_ACT = 'REQUEST_RESOURCE_UPDATE_ACT';

export function requestResourceUpdateAct(data) {
  return {
    type: REQUEST_RESOURCE_UPDATE_ACT,
    promise: request.put(API.update, data)
  }
}

export const REQUEST_RESOURCE_SHOW_ACT = 'REQUEST_RESOURCE_SHOW_ACT';

export function requestResourceShowAct(data) {
  const api = API.show.replace(/:id/, data.id);
  
  return {
    type: REQUEST_RESOURCE_SHOW_ACT,
    promise: request.get(api)
  }
}

export const REQUEST_RESOURCE_NEW_ACT = 'REQUEST_RESOURCE_NEW_ACT';

export function requestResourceNewAct() {
  return {
    type: REQUEST_RESOURCE_NEW_ACT
  }
}