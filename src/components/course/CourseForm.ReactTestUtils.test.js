import expect from 'expect';
import React from 'react';
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

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let outPut =  renderer.getRenderOutput();

  return {
    props,
    outPut,
    renderer
  }
}

describe('CourseForm via React Test Utils', ()=>{
  it('renders form and h1', ()=> {
    const { outPut } = setUp();
    expect(outPut.type).toBe("form");
    let [ h1 ] =  outPut.props.children;
    console.log(h1.type);
    expect(h1.type).toBe('h1');
  });

  it('Save button is labeled "Save" when not saving', function () {
    const { outPut } = setUp(true);
    const submitButton = outPut.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
