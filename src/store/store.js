import { createStore } from 'redux';
import reducers from './redusers/reducers';

const store = createStore(reducers);

export default store;