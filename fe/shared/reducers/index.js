import sessionReducer from './Session';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  sessionReducer: sessionReducer
}