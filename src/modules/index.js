import { combineReducers } from 'redux';

import auth from './auth';
import settings from './settings';

export default combineReducers({
  auth,
  settings
});
