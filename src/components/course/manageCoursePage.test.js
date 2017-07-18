import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './manageCoursePage';

describe ('Manage course page', () => {
    it ('Sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => {return Promise.resolve(); }},
            course: {id: '', watchHref: '' ,title: '' , authorId: '' , length: '' , category: ''}
        }
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
    });
});