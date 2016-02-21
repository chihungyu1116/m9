import { REQUEST_LOGIN_ACT } from '../actions/Session'


export default function Session(state = {}, action) {
  switch(action.type) {
    case REQUEST_LOGIN_ACT:
      
    default:
      return state;
  }
}