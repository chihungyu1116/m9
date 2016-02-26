import request from '../lib/request';
import { requestLogoutAct } from './Session';

const API = {};

export const REQUEST_NOTIFICATION_CLOSE = 'REQUEST_NOTIFICATION_CLOSE';

export function requestNotificationClose(data) {
  requestLogoutAct();

  return {
    type: REQUEST_NOTIFICATION_CLOSE,
    data
  }
}