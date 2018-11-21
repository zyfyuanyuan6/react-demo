import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import CourseForm from './CourseForm';


function setUp(saving){
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: ()=>{}
  };

  return shallow(<CourseForm {...props}/>);
}


it('renders form and h1', ()=> {
  const wrapper = setUp(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Manage Course');
});


it('Save button is labeled "Save" when not saving', ()=> {
  const wrapper = setUp(true);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('input').props().value).toBe('Saving...');
});
