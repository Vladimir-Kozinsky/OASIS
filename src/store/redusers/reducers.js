import { combineReducers } from 'redux';
import menuReduser from './menuReduser';

const reducers = combineReducers({
    menu: menuReduser,
});

export default reducers;