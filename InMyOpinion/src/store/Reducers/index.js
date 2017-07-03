import { combineReducers } from 'redux';
import currentUser from './currentUser';
import restaurants from './restaurants';


export default combineReducers ({
  currentUser,
  restaurants
})
