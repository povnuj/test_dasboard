import { combineReducers } from 'redux';
import navReducer  from './navStore';

const rootReducer = combineReducers({
    nav: navReducer,
});

export default rootReducer;