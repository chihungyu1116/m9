import sessionReducer from './SessionReducer';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  sessionReducer: sessionReducer
}