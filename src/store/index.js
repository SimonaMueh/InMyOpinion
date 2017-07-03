import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import thunk from 'react-thunk';


const store = createStore(
  reducer,
  applyMiddleware(),
);

export default store;
