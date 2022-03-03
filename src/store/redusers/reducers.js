import { combineReducers } from 'redux';
import menuReduser from './menuReduser';
import legsReduser from './legsReduser';

const reducers = combineReducers({
    menu: menuReduser,
    legs: legsReduser
});

export default reducers;