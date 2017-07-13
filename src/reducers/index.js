import {combineReducers} from 'redux';
import courses from './courseReducer.js';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;