import { combineReducers } from 'redux';
import {earthReducer} from './earth/earth.reducer';

const rootReducer = combineReducers({
    earth: earthReducer,
});

export default rootReducer;