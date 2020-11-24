 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';

const initialState = {};

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(
rootReducer,
initialState,
composedEnhancer
);

export default store;

