import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSucces(courses) {
    console.log(courses);
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(courses) {
    console.log(courses);
    return { type: types.CREATE_COURSE_SUCCESS, courses};
}

export function updateCourseSuccess(courses) {
    return { type: types.UPDATE_COURSE_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSucces(courses));
        }).catch(error => {
             dispatch(ajaxCallError());
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(courses));
            throw(error);
        });
    };
}