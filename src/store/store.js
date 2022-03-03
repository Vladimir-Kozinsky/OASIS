import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './redusers/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));
//composeWithDevTools()
export default store;