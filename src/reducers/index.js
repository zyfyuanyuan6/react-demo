import { combineReducers } from 'redux';
import courses from './courseReducers';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer =  combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
