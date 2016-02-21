import request from 'axios';

const API = {
  login: 'http://localhost:3000/session/login',
  logout: 'http://localhost:3000/session/logout'
};

export const REQUEST_LOGIN_ACT = 'REQUEST_LOGIN_ACT'

export function requestLoginAct() {
  return {
    type:    REQUEST_LOGIN_ACT,
    promise: request.get(API.login)
  }
}

export const REQUEST_LOGOUT_ACT = 'REQUEST_LOGOUT_ACT'

export function requestLogoutAct() {
  return {
    type:    REQUEST_LOGOUT_ACT,
    promise: request.get(API.logout)
  }
}