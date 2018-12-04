import { combineReducers } from 'redux';

import messageReducer from './message-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  messageState: messageReducer,
  authState: authReducer,
});

export default reducers;
