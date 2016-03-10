import {
  REQUEST_MEMBER_LOOKUP_ACT
} from '../actions/Member';

export default function Notification(state = {}, action) {
  const actType = action.type;
  
  if(actType === REQUEST_MEMBER_LOOKUP_ACT) {
    console.log('action ~~#@: ', action)
  }

  return state;
}