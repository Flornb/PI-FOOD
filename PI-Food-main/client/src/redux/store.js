// store holds the whole state tree of the application
// import { legacy_createStore as createStore } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);


