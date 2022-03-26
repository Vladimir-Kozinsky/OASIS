import { combineReducers } from 'redux';
import menuReduser from './menuReduser';
import legsReduser from './legsReduser';
import authReduser from './authReduser';

const reducers = combineReducers({
    auth: authReduser,
    menu: menuReduser,
    legs: legsReduser
});

export default reducers;