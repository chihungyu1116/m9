import request from '../lib/request';

const API = {
  index: '/member',
  new: '/member/new',
  show: '/member/:id',
  create: '/member',
  update: '/member/update',
  lookup: '/member/lookup'
};

export const REQUEST_MEMBER_INDEX_ACT = 'REQUEST_MEMBER_INDEX_ACT';

export function requestMemberIndexAct(data) {
  return {
    type: REQUEST_MEMBER_INDEX_ACT,
    promise: request.get(API.index, data)
  }
}

export const REQUEST_MEMBER_CREATE_ACT = 'REQUEST_MEMBER_CREATE_ACT';

export function requestMemberCreateAct(data) {
  return {
    type: REQUEST_MEMBER_CREATE_ACT,
    promise: request.post(API.create, data)
  }
}

export const REQUEST_MEMBER_UPDATE_ACT = 'REQUEST_MEMBER_UPDATE_ACT';

export function requestMemberUpdateAct(data) {
  return {
    type: REQUEST_MEMBER_UPDATE_ACT,
    promise: request.put(API.update, data)
  }
}

export const REQUEST_MEMBER_SHOW_ACT = 'REQUEST_MEMBER_SHOW_ACT';

export function requestMemberShowAct(data) {
  const api = API.show.replace(/:id/, data.id);
  
  return {
    type: REQUEST_MEMBER_SHOW_ACT,
    promise: request.get(api)
  }
}

export const REQUEST_MEMBER_NEW_ACT = 'REQUEST_MEMBER_NEW_ACT';

export function requestMemberNewAct() {
  return {
    type: REQUEST_MEMBER_NEW_ACT,
    promise: request.get(API.new)
  }
}

export const REQUEST_MEMBER_LOOKUP_ACT = 'REQUEST_MEMBER_LOOKUP_ACT';

export function requestMemberLookUpAct(data) {
  return {
    type: REQUEST_MEMBER_LOOKUP_ACT,
    promise: request.get(API.lookup)
  }
}