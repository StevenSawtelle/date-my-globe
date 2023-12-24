import { combineReducers } from 'redux';
import { earthReducer } from './earth/earth.slice';

const rootReducer = combineReducers({
    earth: earthReducer,
});

export default rootReducer;