import { combineReducers } from 'redux';
import menuReduser from './menuReduser';

const reducers = combineReducers({
    MSN: menuReduser,
});

export default reducers;