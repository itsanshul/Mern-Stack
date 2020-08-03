import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const initialState = {};

//We can also use thunk as applymiddleware(thunk)
const middleware = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
