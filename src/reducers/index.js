import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state << dummy reducer
  form
});

export default rootReducer;
