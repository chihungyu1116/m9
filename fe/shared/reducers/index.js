import sessionReducer from './Session';
import routeReducer from './Route';
import roleReducer from './Role';
import teamReducer from './Team';
import resourceReducer from './Resource';
import notificationReducer from './Notification';
import memberReducer from './Member';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  sessionReducer,
  routeReducer,
  roleReducer,
  teamReducer,
  resourceReducer,
  notificationReducer,
  memberReducer
}