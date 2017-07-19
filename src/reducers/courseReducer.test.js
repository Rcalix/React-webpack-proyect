import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];
        const newCourse = {title: 'C'};

        const action = actions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('Should update course when passed CREATE_COURSE_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];
        const course = {id: 'B', title: 'new Title'};
        const action = actions.updateCourseSuccess(course);
        // ACT
        const newState = courseReducer(initialState, action);
        const updateCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'A');
        // ASSERT 
        expect(updateCourse.title).toEqual('new Title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });

});