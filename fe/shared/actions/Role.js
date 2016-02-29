import request from '../lib/request';

export const UPDATE_RESOURCE_TREE_ACT = 'UPDATE_RESOURCE_TREE_ACT';

export function updateResourceTreeAct(resourceTree) {
  return {
    type: UPDATE_RESOURCE_TREE_ACT,
    resourceTree
  }
}