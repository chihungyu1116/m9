import request from '../lib/request';

export const AFTER_REDIRECT_ACT = 'AFTER_REDIRECT_ACT';

export function afterRedirectAct() {
  return {
    type: AFTER_REDIRECT_ACT
  }
}