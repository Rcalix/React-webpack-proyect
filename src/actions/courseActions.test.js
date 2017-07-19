import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('Should create a CREATE_COURSE_SUCCESS ACTION', () => {
            const courses = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                courses: courses
            };

            const action = courseActions.createCourseSuccess(courses);

            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('shoud create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //  call to nock..
        // nock('http://example.com/')
        //     .get('/courses')
        //     .reply(200, { body: {course: [ {id: 1, firstName: 'cory', lastName: 'House' }] }});

        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            {types: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedAction);
        store.dispatch(courseActions.loadCourses()).then(() =>{
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
