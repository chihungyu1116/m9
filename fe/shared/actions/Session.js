import request from '../lib/request';

const API = {
  user: '/session/user',
  login: '/session/login',
  logout: '/session/logout'
};

export const REQUEST_LOGIN_ACT = 'REQUEST_LOGIN_ACT';

export function requestLoginAct() {
  return {
    type: REQUEST_LOGIN_ACT,
    promise: request.get(API.login)
  }
}

export const REQUEST_LOGOUT_ACT = 'REQUEST_LOGOUT_ACT';

export function requestLogoutAct() {
  return {
    type: REQUEST_LOGOUT_ACT,
    promise: request.get(API.logout)
  }
}

export const REQUEST_USER_SHOW_ACT = 'REQUEST_USER_SHOW_ACT';

export function requestUserShowAct() {
  return {
    type: REQUEST_USER_SHOW_ACT,
    promise: request.get(API.user)
  }
}