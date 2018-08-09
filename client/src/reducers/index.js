// this is the rootReducer file that brings together all other reducers.
// not many in this case as it is a simple application

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});
