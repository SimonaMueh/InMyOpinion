import { combineReducers } from 'redux';
import topicReducer from './topicReducer.js'
import categoryReducer from './categoryReducer.js'



export default combineReducers ({
  topicReducer,
  categoryReducer,
});
