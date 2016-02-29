import request from '../lib/request';

const API = {
  index: '/role'
}

export const UPDATE_RESOURCE_TREE_ACT = 'UPDATE_RESOURCE_TREE_ACT';

export function updateResourceTreeAct(resourceTree) {
  return {
    type: UPDATE_RESOURCE_TREE_ACT,
    resourceTree
  }
}

export const UPDATE_RESOURCE_INPUT_ACT = 'UPDATE_RESOURCE_INPUT_ACT';

export function updateResourceInputAct(resourceInput) {
  return {
    type: UPDATE_RESOURCE_INPUT_ACT,
    resourceInput
  }
}

export const REQUEST_ROLE_INDEX_ACT = 'REQUEST_ROLE_INDEX_ACT';

export function requestRoleIndexAct(data) {
  return {
    type: REQUEST_ROLE_INDEX_ACT,
    promise: request.get(API.index, data)
  }
}