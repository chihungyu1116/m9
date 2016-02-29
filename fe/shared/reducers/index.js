import sessionReducer from './Session';
import routeReducer from './Route';
import roleReducer from './Role';
import resourceReducer from './Resource';
import notificationReducer from './Notification';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  sessionReducer,
  routeReducer,
  roleReducer,
  resourceReducer,
  notificationReducer
}