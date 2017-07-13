import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            console.log(action);
            return [
                ...state,
                Object.assign({}, action.courses)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            console.log(action);
            return [
                ...state.filter(course => course.id !== action.courses.id),
                Object.assign({}, action.courses)
            ];
        default:
            return state;
        
    }
}